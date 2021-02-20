using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Dtos
{
    public class FoilCountingDto
    {
        public int Width { get; set; }
        public int Height { get; set; }
        public int Quantity { get; set; }
        public int ColorQuantity { get; set; }
    }
}
