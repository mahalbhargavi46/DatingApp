using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        //Add a user
        void Add<T>(T entity) where T: class;

        //Delete individual user
        void Delete<T>(T entity) where T: class;

        //Save a user details
        Task<bool> SaveAll();

        //Get all of our users
        Task<IEnumerable<User>> GetUsers();

        //Get individual user
        Task<User> GetUser(int id);
    }
}