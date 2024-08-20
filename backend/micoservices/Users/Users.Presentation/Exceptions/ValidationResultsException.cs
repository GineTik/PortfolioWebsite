using System.ComponentModel.DataAnnotations;

namespace Users.Presentation.Exceptions;

public class ValidationResultsException : Exception
{
    public IEnumerable<ValidationResult> ValidationResults { get; set; }
    
    public ValidationResultsException(IEnumerable<ValidationResult> validationResults)
    {
        ValidationResults = validationResults;
    }
}