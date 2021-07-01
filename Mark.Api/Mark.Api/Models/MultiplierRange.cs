using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Models
{
    public class MultiplierRange
    {
        [Key]
        public int Id { get; set; }
        public int LowerRange { get; set; }
        public int HigherRange { get; set; }
        public double Multiplier { get; set; }
    }
}
