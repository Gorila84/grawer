using Mark.Api.Models;
using System.Linq;

namespace Mark.Api.Repositories.CountingRepositories
{
    public class MarkCountRepository : IMarkCountRepository
    {
        private readonly DataContext _context;

        public MarkCountRepository(DataContext context)
        {
            _context = context;
        }

        public BuyingMaterialPrice GetMarkingPrice(int id)
        {
            return _context.BuyingMaterialPrices.SingleOrDefault(x => x.Id == id);
        }
    }
}
