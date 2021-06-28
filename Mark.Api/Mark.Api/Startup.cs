using Mark.Api.Count;
using Mark.Api.Helpers;
using Mark.Api.Models;
using Mark.Api.Repositories.CountingRepositories;
using Mark.Api.Services;
using Mark.Api.UsersAuthorisations;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace Mark.Api
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<DataContext>(x => 
                x.UseSqlServer(_configuration.GetConnectionString("ConnectionToDB")));
            services.AddCors();
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IGenericRepository, GenericRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IEngraveCountingService, EngraveCountingService>();
            services.AddScoped<IFoilCountingService, FoilCountingService>();
            services.AddScoped<IMarkCountRepository, MarkCountRepository>();
            services.AddScoped<ISublimationCountingService, SublimationCountingService>();
            services.AddScoped<IMinimalPriceRepository, MinimalPriceRepository>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                        .GetBytes(_configuration.GetSection("AppSettings:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mark.Api", Version = "v1" });
            });
        }   

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(x =>
            {
                        x.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
            });
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mark.Api V1");
            });
            
            app.UseRouting();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
