using Mark.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.CountingRepositories
{
    public class MinimalPriceRepository : IMinimalPriceRepository
    {
        private readonly DataContext _context;

        public MinimalPriceRepository(DataContext context)
        {
            _context = context;
        }

        public decimal MinimalPriceValue(string name)
        {
            var miniamlPrice =  _context.BuyingMaterialPrices.SingleOrDefault(x => x.MarkName == name);
            decimal cos = Convert.ToDecimal(miniamlPrice.MinimalPrice);
            return Decimal.Round(cos, 2);
        }
    }
}
