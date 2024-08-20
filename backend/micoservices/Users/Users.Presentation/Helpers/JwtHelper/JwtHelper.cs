using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Users.Presentation.Extensions.HttpContext;
using Users.Presentation.Options;

namespace Users.Presentation.Helpers.JwtHelper;

public class JwtHelper : IJwtHelper
{
    private readonly JwtOptions _options;
    private readonly ILogger<JwtHeader> _logger;
    
    public JwtHelper(IOptions<JwtOptions> options, ILogger<JwtHeader> logger)
    {
        _logger = logger;
        _options = options.Value;
    }

    public bool Validate(string token, out JwtPayload? payload)
    {
        var rsa = RSA.Create();
        rsa.ImportFromPem(_options.PublicKey);
        payload = null;
        
        var tokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = _options.Issuer,
            ValidAudience = _options.Audience,
            IssuerSigningKey = new RsaSecurityKey(rsa)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        
        try
        {
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out var validatedToken);

            if (validatedToken is not JwtSecurityToken jwtToken)
                throw new SecurityTokenInvalidTypeException("Invalid token type");

            if (!jwtToken.Header.Alg.Equals(SecurityAlgorithms.RsaSha256, StringComparison.InvariantCultureIgnoreCase))
                throw new SecurityTokenInvalidTypeException("Invalid token type");

            payload = new JwtPayload
            {
                UserId = principal.GetUserId()
            };
            return true;

        }
        catch (Exception ex)
        {
            return false;
        }
    }
    
    public JwtPairTokens Create(JwtPayload? payload)
    {
        return new JwtPairTokens
        {
            AccessToken = CreateToken(payload, DateTime.Now.AddMinutes(_options.AccessTokenExpirationInMinutes)),
            RefreshToken = CreateToken(payload, DateTime.Now.AddDays(_options.RefreshTokenExpirationInDays))
        };
    }

    private string CreateToken(JwtPayload? payload, DateTime expirationTime)
    {
        var rsa = RSA.Create();
        rsa.ImportFromPem(_options.PrivateKey);

        var credentials = new SigningCredentials(new RsaSecurityKey(rsa), SecurityAlgorithms.RsaSha256);

        var token = new JwtSecurityToken(
            issuer: _options.Issuer,
            audience: _options.Audience,
            claims: new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, payload.UserId.ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64),
            },
            expires: expirationTime,
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}