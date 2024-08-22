namespace Users.Presentation.Entities;

public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = default!;
    public string Password { get; set; } = default!;
    public bool IsEmailConfirmed { get; set; }
    public int ConfirmationEmailCode { get; set; }
}