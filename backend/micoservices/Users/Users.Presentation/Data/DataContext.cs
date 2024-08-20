using Microsoft.EntityFrameworkCore;
using Users.Presentation.Entities;

namespace Users.Presentation.Data;

public class DataContext : DbContext
{
    public DbSet<User> Users { get; set; } = default!;

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }
}