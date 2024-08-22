namespace Users.Presentation.Helpers.PasswordHasher;

public interface IPasswordHasher
{
    bool Compare(string password, string hash);
    string Hash(string password);
}