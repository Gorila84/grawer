using Mark.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Mark.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RangeController : ControllerBase
    {
        private readonly DataContext _context;

        public RangeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetRaneges()
        {
            var ranges = await _context.MultiplierRanges.ToListAsync();
            return Ok(ranges);
        }
        //[HttpGet ("{id}")]
        //public async Task<IActionResult> GetRanege(int quantity)
        //{
        //    var range = await _context.MultiplierRanges.FirstOrDefaultAsync(x=> x.Quantity >= quantity);
        //    return Ok(range);
        //}

        [HttpPost]
        public async Task<IActionResult> AddNewRange([FromBody]MultiplierRange range)
        {
            await _context.MultiplierRanges.AddAsync(range);
            _context.SaveChanges();
            return Ok(range);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditRange(int id,[FromBody]MultiplierRange range)
        {
            var data = await _context.MultiplierRanges.FindAsync(id);
            data.LowerRange = range.LowerRange;
            data.HigherRange = range.HigherRange;
            data.Multiplier = range.Multiplier;
            _context.MultiplierRanges.Update(data);
            await _context.SaveChangesAsync();
            return Ok(range);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRange(int id)
        {
            var data = await _context.MultiplierRanges.FindAsync(id);
            _context.MultiplierRanges.Remove(data);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}