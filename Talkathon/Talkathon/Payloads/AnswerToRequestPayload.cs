using System.ComponentModel.DataAnnotations;

namespace Talkathon.Payloads
{
    public class AnswerToRequestPayload
    {
        [Required]
        public CharacterAttributes? CharacterAttributes { get; set; }
        [Required]
        public string? Prompt { get; set; }
    }
}
