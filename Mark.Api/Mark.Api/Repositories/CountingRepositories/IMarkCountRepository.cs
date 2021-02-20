using Mark.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.CountingRepositories
{
    public interface IMarkCountRepository
    {
        BuyingMaterialPrice GetMarkingPrice(int id);
    }
}
