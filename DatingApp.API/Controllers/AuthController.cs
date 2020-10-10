using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            //Validate our requests

            //Ability to login with capital or lowercase letters
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            //If the username already exists
            if(await _repo.UserExists(userForRegisterDto.Username)){
                return BadRequest("Username already exists");
            }
            //If not, creation of username
            var userToCreate = new User
            {
                Username = userForRegisterDto.Username 
            };
            
            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201); 
        }
    }
}