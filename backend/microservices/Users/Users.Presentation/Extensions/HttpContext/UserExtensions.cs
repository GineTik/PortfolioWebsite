using System.Security.Claims;
using Microsoft.IdentityModel.JsonWebTokens;
using Users.Presentation.Exceptions;

namespace Users.Presentation.Extensions.HttpContext;

public static class UserExtensions
{
    public static int GetUserId(this ClaimsPrincipal user)
    {
        ArgumentNullException.ThrowIfNull(user);
        var stringId = user.FindFirstValue(JwtRegisteredClaimNames.Sub);
        return stringId == null ? throw new UserIdNullException() : int.Parse(stringId);
    }
}