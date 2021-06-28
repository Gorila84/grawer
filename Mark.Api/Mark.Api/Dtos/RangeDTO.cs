using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Dtos
{
    public class RangeDTO
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public double RangeMultiplier { get; set; }
    }
}
