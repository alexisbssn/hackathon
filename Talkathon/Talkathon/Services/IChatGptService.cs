namespace Talkathon.Services
{
    public interface IChatGptService
    {
        public string Generate(string prompt);
    }
}
