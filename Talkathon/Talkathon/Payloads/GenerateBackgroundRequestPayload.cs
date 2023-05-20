using System.ComponentModel.DataAnnotations;

namespace Talkathon.Payloads
{
    public class GenerateBackgroundRequestPayload
    {
        [Required]
        public CharacterAttributes? CharacterAttributes { get; set; }
    }
}
