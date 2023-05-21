using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using OpenAI_API.Moderation;
using Talkathon.Payloads;
using Talkathon.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Talkathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TalkathonController : ControllerBase
    {
        public IChatGptService ChatGptService { get; }
        public IOptions<Secrets> Secrets { get; }

        public TalkathonController(IChatGptService chatGptService) {
            ChatGptService = chatGptService;
        }

        [HttpPost("GenerateBackground")]
        public async Task<IActionResult> GenerateBackground([FromBody] GenerateBackgroundRequestPayload payload) 
        {
            string prompt = "I have the start to a character's background, here it is:\n" +
                $"Name: {payload.CharacterAttributes.Name}\n" +
                $"Age: {payload.CharacterAttributes.Age}\n" +
                $"Race: {payload.CharacterAttributes.Race}\n" +
                $"Background: {payload.CharacterAttributes.Background}\n" +
                $"\nCan you please say something new that could be added to the Background?";

            SimpleResponse response = new SimpleResponse(await ChatGptService.Generate(prompt));
            return Ok(response);
        }

        // POST api/<TalkathonController>
        [HttpPost("AnswerTo")]
        public async Task<IActionResult> AnswerTo([FromBody] AnswerToRequestPayload payload)
        {
            string prompt = "I have a character's background, here it is:\n" +
                $"Name: {payload.CharacterAttributes.Name}\n" +
                $"Age: {payload.CharacterAttributes.Age}\n" +
                $"Race: {payload.CharacterAttributes.Race}\n" +
                $"Background: {payload.CharacterAttributes.Background}\n" +
                $"\nIn the voice of this character, answer to the following statement:\n" +
            $"\n{payload.Prompt}";

            SimpleResponse response = new SimpleResponse(await ChatGptService.Generate(prompt));
            return Ok(response);
        }
    }
}
