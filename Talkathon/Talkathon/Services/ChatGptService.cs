using Microsoft.Extensions.Options;
using OpenAI_API;

namespace Talkathon.Services
{
    public class ChatGptService: IChatGptService
    {
        public ChatGptService(IOptions<Secrets> secrets)
        {
            Api = new OpenAI_API.OpenAIAPI(secrets.Value.ChatGptApiKey);
        }

        public OpenAIAPI Api { get; }

        public async Task<string> Generate(string prompt)
        {
            return await Api.Completions.GetCompletion(prompt);
        }
    }
}
