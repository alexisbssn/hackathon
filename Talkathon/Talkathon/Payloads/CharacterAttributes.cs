namespace Talkathon.Payloads
{
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
}
