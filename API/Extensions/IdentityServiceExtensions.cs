using Domain;
using Persistence;
using Microsoft.AspNetCore.Identity;

namespace API.Extensions
{
  public static class IdentityServiceExtensions
  {
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
      services.AddIdentityCore<AppUser>(opt =>
          {
            opt.Password.RequireNonAlphanumeric = false;
            opt.Password.RequireDigit = false;
            opt.Password.RequireUppercase = false;
            opt.Password.RequireLowercase = false;
          })
          .AddEntityFrameworkStores<DataContext>();
      // .AddSignInManager<SignInManager<AppUser>>();

      // var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));

      // services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      //     .AddJwtBearer(opt =>
      //     {
      //         opt.TokenValidationParameters = new()
      //         {
      //             ValidateIssuerSigningKey = true,
      //             IssuerSigningKey = key,
      //             ValidateAudience = false,
      //             ValidateIssuer = false
      //         };
      //     });

      return services;
    }

  }
}