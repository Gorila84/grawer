using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.CountingRepositories
{
    public interface IMinimalPriceRepository
    {
        decimal MinimalPriceValue(string name);
    }
}
