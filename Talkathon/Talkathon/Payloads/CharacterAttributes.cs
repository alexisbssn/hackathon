using System.ComponentModel.DataAnnotations;

namespace Talkathon.Payloads
{
    public class CharacterAttributes
    {
        [Required]
        public string? Name { get; set; }
        [Required]
        public int? Age { get; set; }
        [Required]
        public string? Race { get; set; }
        [Required]
        public string? Background { get; set; }
    }
}
