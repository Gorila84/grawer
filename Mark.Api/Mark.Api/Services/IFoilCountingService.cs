using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Services
{
    public interface IFoilCountingService
    {
        Task<decimal> FoilPriceCounting(string name, int width, int height, int quantity, int colorQuantity);
    }
}
