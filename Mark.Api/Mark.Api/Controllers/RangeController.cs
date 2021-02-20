using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mark.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarkingRange = Mark.Api.Models.MarkingRange;

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
            var ranges = await _context.Ranges.ToListAsync();
            return Ok(ranges);
        }
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetRanege(int quantity)
        {
            var range = await _context.Ranges.FirstOrDefaultAsync(x=> x.Quantity == quantity);
            return Ok(range);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewRange([FromBody]MarkingRange range)
        {
            await _context.Ranges.AddAsync(range);
            _context.SaveChanges();
            return Ok(range);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditRange(int id,[FromBody]MarkingRange range)
        {
            var data = await _context.Ranges.FindAsync(id);
            data.MaxHeight = range.MaxHeight;
            data.MaxWidth = range.MaxWidth;
            data.RangeMultiplier = range.RangeMultiplier;
            _context.Ranges.Update(data);
            await _context.SaveChangesAsync();
            return Ok(range);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRange(int id)
        {
            var data = await _context.Ranges.FindAsync(id);
            _context.Ranges.Remove(data);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}