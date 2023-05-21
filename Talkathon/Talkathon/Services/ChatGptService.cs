using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using OpenAI_API;
using OpenAI_API.Completions;
using OpenAI_API.Models;

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
            string response = "";
            await foreach (var token in Api.Completions.StreamCompletionEnumerableAsync(new CompletionRequest(prompt, Model.DavinciText, 200, 0.5, presencePenalty: 0.1, frequencyPenalty: 0.1)))
            {
                response += token;
            }
            return response;
        }
    }
}
