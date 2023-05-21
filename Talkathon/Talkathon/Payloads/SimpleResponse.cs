namespace Talkathon.Payloads
{
    public class SimpleResponse
    {
        public SimpleResponse(string result) {
            Result = result;
        }
        public string Result { get; set; }
    }
}
