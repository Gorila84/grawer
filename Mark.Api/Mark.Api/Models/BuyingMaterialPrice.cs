using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mark.Api.Models
{
    public class BuyingMaterialPrice
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string MarkName { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public double SellingPrice { get; set; } 
        public double MinimalPrice { get; set; }

    }
}
