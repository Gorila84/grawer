
using Microsoft.EntityFrameworkCore;

namespace Mark.Api.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        
            public DbSet<BuyingMaterialPrice> BuyingMaterialPrices { get; set; }
            public DbSet<User> Users { get; set; }
            public DbSet<MarkingRange> Ranges { get; set; }
            public DbSet<MarkMaterialMargin> MarkMaterialMargins { get; set; }
    }
}
