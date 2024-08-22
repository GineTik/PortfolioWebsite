using MediatR;
using Users.Presentation.Data.Gateways.Users;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.JwtHelper;

namespace Users.Presentation.CQRS.Authentication;

public record ConfirmEmailCommand(int UserId, int Code) : IRequest<ConfirmEmailCommandResponse>
{
}

public class ConfirmEmailCommandResponse
{
    public JwtPairTokens Tokens { get; set; } = default!;
}

public sealed class ConfirmEmailCommandHandler : IRequestHandler<ConfirmEmailCommand, ConfirmEmailCommandResponse>
{
    private readonly IUserGateway _userGateway;
    private readonly IJwtHelper _jwtHelper;
    
    public ConfirmEmailCommandHandler(IUserGateway userGateway, IJwtHelper jwtHelper)
    {
        _userGateway = userGateway;
        _jwtHelper = jwtHelper;
    }

    public async Task<ConfirmEmailCommandResponse> Handle(ConfirmEmailCommand request, CancellationToken cancellationToken)
    {
        var user = await _userGateway.GetByIdAsync(request.UserId);
        
        if (user == null || user.ConfirmationEmailCode != request.Code)
            throw new InvalidConfirmationEmailCodeException();
        
        await _userGateway.ConfirmEmailAsync(request.UserId);
        return new ConfirmEmailCommandResponse
        {
            Tokens = _jwtHelper.Create(new JwtPayload {UserId = request.UserId})
        };
    }
}