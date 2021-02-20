using Mark.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.MarkRepository
{
    public interface IMarkingRepository
    {
        Task<IEnumerable<BuyingMaterialPrice>> GetMarkNames();

        Task<BuyingMaterialPrice> GetMarkName(string name);
    }
}
