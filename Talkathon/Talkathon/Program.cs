using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Talkathon;
using Talkathon.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

RegisterConfiguration(builder);

RegisterServices(builder.Services);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors(options =>
    {
        options.AllowAnyHeader();
        options.AllowAnyOrigin();
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


void RegisterConfiguration(WebApplicationBuilder builder)
{
    IConfigurationRoot configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddEnvironmentVariables()
            .AddUserSecrets<Program>()
            .Build();

    builder.Services.Configure<Secrets>(configuration);

}
void RegisterServices(IServiceCollection services)
{
    services.AddSingleton<IChatGptService, ChatGptService>();
}
