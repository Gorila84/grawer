using Mark.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark.Api.UsersAuthorisations
{
    public interface IAuthRepository
    {
        Task<User> Login(string nuserName, string pasword);
        Task<User> Register(User user, string password);
        Task<bool> UserExist(string userName);
    }
}
