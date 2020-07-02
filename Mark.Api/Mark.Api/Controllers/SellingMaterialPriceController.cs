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
    public class SellingMaterialPriceController : ControllerBase
    {
        private readonly DataContext _context;

        public SellingMaterialPriceController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBuyingMaterialPrices()
        {
            var buyingMaterialPrices = await _context.BuyingMaterialPrices.ToListAsync();
            return Ok(buyingMaterialPrices);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBuyingMaterialPrice(string name)
        {
            var buyingMaterialPrice = await _context.BuyingMaterialPrices.FirstOrDefaultAsync(x => x.MarkName == name);
            return Ok(buyingMaterialPrice);
        }

        [HttpPost]
        public async Task<IActionResult> AddBuyingMaterialPrice([FromBody]BuyingMaterialPrice buyingMaterialPrice)
        {
            await _context.BuyingMaterialPrices.AddAsync(buyingMaterialPrice);
            _context.SaveChanges();
            return Ok(buyingMaterialPrice);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBuyingMaterialPrice(int id, [FromBody]BuyingMaterialPrice buyingMaterialPrice)
        {
            var data = await _context.BuyingMaterialPrices.FindAsync(id);
            data.MarkName = buyingMaterialPrice.MarkName;
            data.Width = buyingMaterialPrice.Width; 
            data.Height = buyingMaterialPrice.Height;
            data.SellingPrice = buyingMaterialPrice.SellingPrice;
            _context.BuyingMaterialPrices.Update(data);
            await _context.SaveChangesAsync();
            return Ok(buyingMaterialPrice);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBuyingMaterialPrice(int id)
        {
            var data = await _context.BuyingMaterialPrices.FindAsync(id);
            _context.BuyingMaterialPrices.Remove(data);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}