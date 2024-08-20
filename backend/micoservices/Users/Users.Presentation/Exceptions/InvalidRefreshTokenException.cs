namespace Users.Presentation.Exceptions;

public class InvalidRefreshTokenException : Exception
{
    public InvalidRefreshTokenException() : base("InvalidRefreshToken")
    {
        
    }
}