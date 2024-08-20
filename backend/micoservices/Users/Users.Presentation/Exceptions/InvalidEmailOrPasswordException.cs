namespace Users.Presentation.Exceptions;

public class InvalidEmailOrPasswordException : Exception
{
    public InvalidEmailOrPasswordException() : base("InvalidEmailOrPassword")
    {
        
    }
}