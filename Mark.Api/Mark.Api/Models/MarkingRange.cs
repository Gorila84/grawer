using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mark.Api.Models
{
    public class MarkingRange
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Quantity { get; set; }
        public double RangeMultiplier { get; set; }
        public int MaxWidth { get; set; }
        public int MaxHeight { get; set; }
        public int MnimalPrice { get; set; }
    }
}
