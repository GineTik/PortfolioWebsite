using System.ComponentModel.DataAnnotations;
using Users.Presentation.CQRS.Authentication;

namespace Users.Presentation.Helpers.ValidationHelper;

public static class ValidationHelper
{
    public static bool TryValidateObject<T>(T request, out ICollection<ValidationResult> validationResults)
    {
        ArgumentNullException.ThrowIfNull(request);
        validationResults = new List<ValidationResult>();
        return Validator.TryValidateObject(request, new ValidationContext(request, null, null), validationResults, true);
    }
}