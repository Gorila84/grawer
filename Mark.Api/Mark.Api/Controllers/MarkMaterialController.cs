using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mark.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mark.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarkMaterialController : ControllerBase
    {
        private readonly DataContext _context;

        public MarkMaterialController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetMarkMatrials()
        {
            var markMaterialMargins = await _context.MarkMaterialMargins.ToListAsync();
            return Ok(markMaterialMargins);
        }
        [HttpGet("{name}")]
        public async Task<IActionResult> GetMarkMatrial(string name)
        {
            var markMaterialMargin = await _context.MarkMaterialMargins.FirstOrDefaultAsync(x => x.Name == name);
            return Ok(markMaterialMargin);
        }

        [HttpPost]
        public async Task<IActionResult> AddMarkMaterial([FromBody]MarkMaterialMargin markMaterialMargin)
        {
            await _context.MarkMaterialMargins.AddAsync(markMaterialMargin);
            _context.SaveChanges();
            return Ok(markMaterialMargin);
        }

        [HttpPut()]
        public async Task<IActionResult> EditMarkMaterial(string name, [FromBody]MarkMaterialMargin markMaterialMargin)
        {
            var data = await _context.MarkMaterialMargins.FindAsync(name);
            data.Name = markMaterialMargin.Name;
            data.AgencyMultiplier = markMaterialMargin.AgencyMultiplier;
            _context.MarkMaterialMargins.Update(data);
            await _context.SaveChangesAsync();
            return Ok(markMaterialMargin);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMarkMatrial(int id)
        {
            var data = await _context.MarkMaterialMargins.FindAsync(id);
            _context.MarkMaterialMargins.Remove(data);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
