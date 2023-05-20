namespace Talkathon.Services
{
    public interface IChatGptService
    {
        public Task<string> Generate(string prompt);
    }
}
