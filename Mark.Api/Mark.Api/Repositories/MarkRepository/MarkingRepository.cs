using Mark.Api.Helpers;
using Mark.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.MarkRepository
{
    public class MarkingRepository : GenericRepository, IMarkingRepository
    {
        private readonly DataContext _context;

        public MarkingRepository(DataContext context):base(context)
        {
            _context = context;
        }

        public async Task<BuyingMaterialPrice> GetMarkName(string name)
        {
            var markMethod = await _context.BuyingMaterialPrices.FirstOrDefaultAsync(p => p.MarkName == name);
            return markMethod;
                }

        public async Task<IEnumerable<BuyingMaterialPrice>> GetMarkNames()
        {
            var markMethods = await _context.BuyingMaterialPrices.ToListAsync();
            return markMethods;
        }
    }
}
