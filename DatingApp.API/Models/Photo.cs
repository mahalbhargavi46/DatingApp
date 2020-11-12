using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }

        // I want the users to be able to set a photo as their main profile picture from the set of photos that they uploaded
        public bool IsMain { get; set;}

        public User User { get; set; }
        public int UserId { get; set; }

    }
}