using Users.Presentation.Entities;

namespace Users.Presentation.Data.Gateways.Users;

public interface IUserGateway
{
    Task<User?> GetByEmailAsync(string email);
    Task<User?> GetByIdAsync(int id);
    Task<int> TryAddAsync(User user);
    Task ConfirmEmailAsync(int userId);
}