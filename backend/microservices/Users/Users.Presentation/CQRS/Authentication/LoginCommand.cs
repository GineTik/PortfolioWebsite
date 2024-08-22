using System.ComponentModel.DataAnnotations;
using MediatR;
using Users.Presentation.Data.Gateways.Users;
using Users.Presentation.Entities;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.CodeGenerator;
using Users.Presentation.Helpers.MailSender;
using Users.Presentation.Helpers.ValidationHelper;
using Users.Presentation.Helpers.PasswordHasher;

namespace Users.Presentation.CQRS.Authentication;

public class LoginCommand : IRequest<LoginCommandResponse>
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = default!;
    [Required]
    [MinLength(3)]
    public string Password { get; set; } = default!;
}

public class LoginCommandResponse
{
    public int UserId { get; set; }
    public bool IsEmailConfirmed { get; set; }
}

public sealed class LoginCommandHandler : IRequestHandler<LoginCommand, LoginCommandResponse>
{
    private readonly IUserGateway _userGateway;
    private readonly IPasswordHasher _passwordHasher;
    private readonly ICodeGenerator _codeGenerator;
    private readonly IMailSender _mailSender;
    
    public LoginCommandHandler(IUserGateway userGateway, IPasswordHasher passwordHasher, ICodeGenerator codeGenerator, IMailSender mailSender)
    {
        _userGateway = userGateway;
        _passwordHasher = passwordHasher;
        _codeGenerator = codeGenerator;
        _mailSender = mailSender;
    }

    public async Task<LoginCommandResponse> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        if (ValidationHelper.TryValidateObject(request, out var validationResults) == false)
            throw new ValidationResultsException(validationResults);

        var user = await _userGateway.GetByEmailAsync(request.Email);
        
        if (user == null || _passwordHasher.Compare(request.Password, user.Password) == false)
            throw new InvalidEmailOrPasswordException();

        if (user.IsEmailConfirmed == false)
        {
            var code = _codeGenerator.Generate();
            await _mailSender.SendConfirmationMail(request.Email, code);            
        }
        
        return new LoginCommandResponse
        {
            IsEmailConfirmed = user.IsEmailConfirmed,
            UserId = user.Id
        };
    }
}