using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Talkathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TalkathonController : ControllerBase
    {
        public enum CharacterClass
        {
            Human,
            Elf,
            Orc,
            Dwarf,
            Gnome,
            Goblin
        }

        public class CharacterAttributes
        {
            public string Name;
            public int Age;
            public CharacterClass CharacterClass;
            public string Background;

            public CharacterAttributes(string name, int age, CharacterClass characterClass, string background)
            {
                Name = name;
                Age = age;
                CharacterClass = characterClass;
                Background = background;
            }
        }

        [HttpPost]
        public string GenerateBackground(CharacterAttributes attributes) 
        {
            return "Bob the builder is a 35-year-old man with an orange shirt and a jeans jumpsuit that is an animated character for a children's TV show. He's always in a good mood.";
        }

        // POST api/<TalkathonController>
        [HttpPost]
        public string AnswerTo([FromBody] CharacterAttributes characterAttributes, [FromBody] string prompt)
        {
            return "Can we do it? Yes we can!";
        }
    }
}
