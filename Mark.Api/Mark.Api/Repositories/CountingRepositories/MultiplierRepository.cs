using Mark.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.CountingRepositories
{
    public class MultiplierRepository : IMultiplierRepository
    {
        private readonly DataContext _context;

        public MultiplierRepository(DataContext context)
        {
            _context = context;
        }

        public decimal GetMultiplier(int quantity)
        {
            var multiplier = _context.MultiplierRanges.SingleOrDefault(x => x.LowerRange <= quantity
                                                                        && x.HigherRange >= quantity);
               
                
            decimal multiplierValue = Convert.ToDecimal(multiplier.Multiplier);
            return Decimal.Round(multiplierValue, 2);
        }
    }
}
