namespace Users.Presentation.Helpers.JwtHelper;

public interface IJwtHelper
{
    bool Validate(string token, out JwtPayload? payload);
    JwtPairTokens Create(JwtPayload? payload);
}