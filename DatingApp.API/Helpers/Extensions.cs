using Microsoft.AspNetCore.Http;
namespace DatingApp.API.Helpers
{
    //Provided static because we dont need to create a new instance of 'Extensions' class when we wanna use one of its methods.
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            //These header are provided just to display the Application-Error header to the client
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }
    }
}