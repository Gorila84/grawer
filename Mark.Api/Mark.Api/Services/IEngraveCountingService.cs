using Mark.Api.Models;
using System.Threading.Tasks;


namespace Mark.Api.Count
{
    public interface IEngraveCountingService
    {
        Task<decimal> EngravePriceCounting(string name,int width, int height, int quantity);
    }
}
