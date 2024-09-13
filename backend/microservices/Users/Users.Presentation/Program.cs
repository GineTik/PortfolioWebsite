/*
 * To save time, all the code written in the current project
 */

using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using Confluent.Kafka;
using KafkaAbstractions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Users.Presentation.Data;
using Users.Presentation.Extensions.Services;
using Users.Presentation.Kafka.Messages;
using Users.Presentation.Options;
using KafkaOptions = Users.Presentation.Options.KafkaOptions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddMediatR(options => options.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
builder.Services.AddHelpers();
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection(JwtOptions.Path));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        var jwtOptions = builder.Configuration.GetSection(JwtOptions.Path).Get<JwtOptions>() ?? throw new InvalidOperationException();
        var rsa = RSA.Create();
        var publicKey = jwtOptions.PublicKey.AsSpan();
        rsa.ImportFromPem(publicKey);
        
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtOptions.Issuer,
            ValidAudience = jwtOptions.Audience,
            IssuerSigningKey = new RsaSecurityKey(rsa)
        };
    });
builder.Services.AddKafkaAbstractions(options =>
{
    var configurationOptions = builder.Configuration.GetSection(KafkaOptions.Path).Get<KafkaOptions>()!;
    
    options.SetProducerConfig(new ProducerConfig
    {
        BootstrapServers = configurationOptions.BootstrapServers,
    });
    options.AddRoute<UserAuthenticated>(configurationOptions.Topics.UserAuthenticated);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();