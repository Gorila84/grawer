using Mark.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace Mark.Api.Count
{
    public class EngraveCountingRepository : IEngraveCountingRepository
    {
        private readonly DataContext _context;

        public EngraveCountingRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<double> MarkingPriceCounting(string name,int width, int height, int quantity)
        {
            var marking = await _context.BuyingMaterialPrices.FirstOrDefaultAsync(x=>x.MarkName == name);
            double markingPrice = marking.SellingPrice / (marking.Height * marking.Width);
            var result = width * height * quantity *markingPrice;
            return result;
        }
    }
}
