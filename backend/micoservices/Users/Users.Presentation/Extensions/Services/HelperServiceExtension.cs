using Users.Presentation.Helpers.CodeGenerator;
using Users.Presentation.Helpers.JwtHelper;
using Users.Presentation.Helpers.MailSender;
using Users.Presentation.Helpers.PasswordHasher;

namespace Users.Presentation.Extensions.Services;

public static class HelperServiceExtension
{
    public static IServiceCollection AddHelpers(this IServiceCollection services)
    {
        services.AddTransient<ICodeGenerator, CodeGenerator>();
        services.AddTransient<IPasswordHasher, PasswordHasher>();
        services.AddTransient<IMailSender, MailSender>();
        services.AddTransient<IJwtHelper, JwtHelper>();
        return services;
    }
}