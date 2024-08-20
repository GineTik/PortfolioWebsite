using Microsoft.EntityFrameworkCore;
using Users.Presentation.Entities;

namespace Users.Presentation.Data.Gateways.Users;

public class UserGateway : IUserGateway
{
    private readonly DataContext _dataContext;
    
    public UserGateway(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _dataContext.Users.FirstOrDefaultAsync(o => o.Email == email);
    }
    
    public async Task<User?> GetByIdAsync(int id)
    {
        return await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == id);
    }
    
    public async Task<int> TryAddAsync(User user)
    {
        var result = _dataContext.Users.Add(user);
        await _dataContext.SaveChangesAsync();
        return result.Entity.Id;
    }
    
    public async Task ConfirmEmailAsync(int userId)
    {
        var user = await GetByIdAsync(userId);
        user.IsEmailConfirmed = true;
        await _dataContext.SaveChangesAsync();
    }
}