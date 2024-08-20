namespace Users.Presentation.Helpers.PasswordHasher;

public class PasswordHasher : IPasswordHasher
{
    public bool Compare(string password, string hash)
    {
        return Hash(password) == hash;
    }
    
    public string Hash(string password)
    {
        return password + "_hashed";
    }
}