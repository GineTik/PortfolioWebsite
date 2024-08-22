namespace Users.Presentation.Helpers.MailSender;

public class MailSender : IMailSender
{
    public Task SendConfirmationMail(string email, int code)
    {
        // TODO: Send confirmation mail
        Console.WriteLine(email + " : " + code);
        return Task.CompletedTask;
    }
}