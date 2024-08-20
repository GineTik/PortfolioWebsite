namespace Users.Presentation.Helpers.MailSender;

public interface IMailSender
{
    Task SendConfirmationMail(string email, int code);
}