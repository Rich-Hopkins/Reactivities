

using System.Text;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Persistence;

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

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("P0LX1AiPFPb477omc2ujW8Mdxs8fa496hHBYhquzUzn4CInRhvKaFCM2cyreVslI"));
			
			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
					.AddJwtBearer(opt =>
					{
							opt.TokenValidationParameters = new TokenValidationParameters
							{
									ValidateIssuerSigningKey = true,
									IssuerSigningKey = key,
									ValidateAudience = false,
									ValidateIssuer = false
							};
					});
			
								services.AddScoped<TokenService>();
			// .AddSignInManager<SignInManager<AppUser>>();

			return services;
		}

	}
}