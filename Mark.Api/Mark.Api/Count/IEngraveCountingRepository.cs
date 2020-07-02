using Mark.Api.Models;
using System.Threading.Tasks;


namespace Mark.Api.Count
{
    public interface IEngraveCountingRepository
    {
        Task<double> MarkingPriceCounting(string name,int width, int height, int quantity);
    }
}
