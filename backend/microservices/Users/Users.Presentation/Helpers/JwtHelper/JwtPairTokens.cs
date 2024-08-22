namespace Users.Presentation.Helpers.JwtHelper;

public class JwtPairTokens
{
    public string AccessToken { get; set; } = default!;
    public string RefreshToken { get; set; } = default!;
}