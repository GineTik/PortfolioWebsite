using System.ComponentModel.DataAnnotations;
using MediatR;
using Users.Presentation.Data.Gateways.Users;
using Users.Presentation.Entities;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.CodeGenerator;
using Users.Presentation.Helpers.JwtHelper;
using Users.Presentation.Helpers.MailSender;
using Users.Presentation.Helpers.PasswordHasher;
using Users.Presentation.Helpers.ValidationHelper;

namespace Users.Presentation.CQRS.Authentication;

public class RegistrationCommand : IRequest<RegistrationCommandResponse>
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = default!;
    [Required]
    [MinLength(3)]
    public string Password { get; set; } = default!;
}

public class RegistrationCommandResponse
{
    public int UserId { get; set; }
    public bool IsEmailConfirmed { get; set; }
    public JwtPairTokens Tokens { get; set; } = default!;
}

public sealed class RegistrationCommandHandler : IRequestHandler<RegistrationCommand, RegistrationCommandResponse>
{
    private readonly IUserGateway _userGateway;
    private readonly IPasswordHasher _passwordHasher;
    private readonly ICodeGenerator _codeGenerator;
    private readonly IMailSender _mailSender;
    private readonly IJwtHelper _jwtHelper;
    
    public RegistrationCommandHandler(IUserGateway userGateway, IPasswordHasher passwordHasher, ICodeGenerator codeGenerator, IMailSender mailSender, IJwtHelper jwtHelper)
    {
        _userGateway = userGateway;
        _passwordHasher = passwordHasher;
        _codeGenerator = codeGenerator;
        _mailSender = mailSender;
        _jwtHelper = jwtHelper;
    }
    
    public async Task<RegistrationCommandResponse> Handle(RegistrationCommand request, CancellationToken cancellationToken)
    {
        if (ValidationHelper.TryValidateObject(request, out var validationResults) == false)
            throw new ValidationResultsException(validationResults);

        var user = await _userGateway.GetByEmailAsync(request.Email);
        
        if (user != null)
            throw new InvalidEmailOrPasswordException();

        var code = _codeGenerator.Generate();
        var userId = await _userGateway.TryAddAsync(ParseUser(request, code));
            
        await _mailSender.SendConfirmationMail(request.Email, code);
        var tokens = _jwtHelper.Create(new JwtPayload {UserId = userId});
        
        return new RegistrationCommandResponse
        {
            IsEmailConfirmed = false,
            UserId = userId,
            Tokens = tokens
        };
    }
    
    private User ParseUser(RegistrationCommand request, int code)
    {
        return new User
        {
            Email = request.Email,
            Password = _passwordHasher.Hash(request.Password),
            ConfirmationEmailCode = code
        };
    }
}