using Mark.Api.Models;
using Mark.Api.Repositories.CountingRepositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Services
{
    public class SublimationCountingService : ISublimationCountingService
    {
        private readonly DataContext _context;
        private readonly IMinimalPriceRepository _minimalPriceRepository;
        private readonly IMultiplierRepository _multiplierRepository;

        public SublimationCountingService(DataContext context, 
                                          IMinimalPriceRepository minimalPriceRepository,
                                          IMultiplierRepository multiplierRepository)
        {
            _context = context;
            _minimalPriceRepository = minimalPriceRepository;
            _multiplierRepository = multiplierRepository;
        }

        public async Task<decimal> SublimationCounting(string name, int width, int height, int quantity)
        {
            var marking = await _context.BuyingMaterialPrices.FirstOrDefaultAsync(x => x.MarkName == name);
            decimal markingPrice = Convert.ToDecimal(marking.SellingPrice / (marking.Height * marking.Width));
            var result = (((width * height) * markingPrice) * quantity) * _multiplierRepository.GetMultiplier(quantity);

            //if (result >= _minimalPriceRepository.MinimalPriceValue(name))
            //{
            //    return Decimal.Round(result, 2);
            //}
            return Decimal.Round(_minimalPriceRepository.MinimalPriceValue(name), 2);

        }
    }
}
