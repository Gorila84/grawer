using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Repositories.CountingRepositories
{
    public interface IMultiplierRepository
    {
        decimal GetMultiplier(int quantity);
    }
}
