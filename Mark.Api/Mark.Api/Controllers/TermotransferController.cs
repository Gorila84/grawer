﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mark.Api.Count;
using Mark.Api.Dtos;
using Mark.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mark.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TermotransferController : ControllerBase
    {
        private readonly IEngraveCountingService _engraveCount;

        public TermotransferController(IEngraveCountingService engraveCount)
        {
            _engraveCount = engraveCount;
        }

        [HttpPost]
        public async Task<IActionResult> CountEngravePart([FromBody]CountingForMarkDto countingSublimation)
        {
            string name = "termotransfer";

            var price = await _engraveCount.EngravePriceCounting(name,
                countingSublimation.Width, countingSublimation.Height, countingSublimation.Quantity);
            price.ToString();
            return Ok(price);
        }
    }
}