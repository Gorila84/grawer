using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mark.Api.Count;
using Mark.Api.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mark.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EngraveController : ControllerBase
    {
        private readonly IEngraveCountingService _engraveCount;

        public EngraveController(IEngraveCountingService engraveCount)
        {
            _engraveCount = engraveCount;
        }

        [HttpPost]
        public async Task<IActionResult> CountEngravePart([FromBody]CountingForMarkDto countingForEngraveDto)
        {
            string name = "grawer";
            var price =  await _engraveCount.EngravePriceCounting(name,
                countingForEngraveDto.Width, countingForEngraveDto.Height, countingForEngraveDto.Quantity);
            price.ToString();
            return Ok(price);
        }
    }
}