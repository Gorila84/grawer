using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mark.Api.Dtos;
using Mark.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mark.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlockController : ControllerBase
    {
        private readonly IFoilCountingService _foilCountingService;

        public FlockController(IFoilCountingService foilCountingService)
        {
            _foilCountingService = foilCountingService;
        }

        [HttpPost]
        public async Task<IActionResult> CountEngravePart([FromBody]FoilCountingDto foilCountingDto)
        {
            string name = "Flock";

            var price = await _foilCountingService.FoilPriceCounting(name,
                foilCountingDto.Width, foilCountingDto.Height, foilCountingDto.Quantity, foilCountingDto.ColorQuantity);
            price.ToString();
            return Ok(price);
        }
    }
}