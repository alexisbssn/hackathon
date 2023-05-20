namespace Talkathon.Payloads
{
    public class GenerateBackgroundRequestPayload
    {
        public GenerateBackgroundRequestPayload(CharacterAttributes characterAttributes)
        {
            CharacterAttributes = characterAttributes;
        }

        public CharacterAttributes CharacterAttributes { get; set; }
    }
}
