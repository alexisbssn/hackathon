namespace Talkathon.Services
{
    public class ChatGptService: IChatGptService
    {
        public ChatGptService() { }

        public string Generate(string prompt)
        {
            return prompt;
        }
    }
}
