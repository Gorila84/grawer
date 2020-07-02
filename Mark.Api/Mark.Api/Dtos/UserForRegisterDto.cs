﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Nazwa użytkownika jest wymagana")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Hasło jest wymagane")]
        [StringLength(12, MinimumLength = 6)]
        public string Password { get; set; }
    }
}
