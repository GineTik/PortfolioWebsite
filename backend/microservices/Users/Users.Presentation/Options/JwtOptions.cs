namespace Users.Presentation.Options;

public class JwtOptions
{
    public const string Path = "Jwt";
    
    public string Issuer { get; set; } = default!;
    public string Audience { get; set; } = default!;
    public string PrivateKey { get; set; } = default!;
    public string PublicKey { get; set; } = default!;
    public int AccessTokenExpirationInMinutes { get; set; }
    public int RefreshTokenExpirationInDays { get; set; }
}