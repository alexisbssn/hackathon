namespace Talkathon.Payloads
{
    public class AnswerToRequestPayload
    {
        public AnswerToRequestPayload(CharacterAttributes characterAttributes, string prompt)
        {
            CharacterAttributes = characterAttributes;
            Prompt = prompt;
        }

        public CharacterAttributes CharacterAttributes { get; set; }
        public string Prompt { get; set; }
    }
}
