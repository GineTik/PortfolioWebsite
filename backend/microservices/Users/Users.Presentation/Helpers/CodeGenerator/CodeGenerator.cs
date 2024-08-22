namespace Users.Presentation.Helpers.CodeGenerator;

public class CodeGenerator : ICodeGenerator
{
    public int Generate()
    {
        return new Random().Next(99999, 1000000);
    }
}