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
        private readonly IEngraveCountingRepository _engraveCount;

        public EngraveController(IEngraveCountingRepository engraveCount)
        {
            _engraveCount = engraveCount;
        }

        [HttpPost]
        public async Task<IActionResult> CountEngravePart([FromBody]CountingForEngraveDto countingForEngraveDto)
        {
            var price =  await _engraveCount.MarkingPriceCounting(countingForEngraveDto.Name,
                countingForEngraveDto.Width, countingForEngraveDto.Height, countingForEngraveDto.Quantity);
            price.ToString();
            return Ok(price);
        }
    }
}