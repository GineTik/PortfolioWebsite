namespace Users.Presentation.Exceptions;

public class InvalidConfirmationEmailCodeException : Exception
{
    public InvalidConfirmationEmailCodeException() : base("InvalidConfirmationEmailCode")
    {
        
    }
}