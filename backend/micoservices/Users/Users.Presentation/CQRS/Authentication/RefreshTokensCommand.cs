using MediatR;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.JwtHelper;

namespace Users.Presentation.CQRS.Authentication;

public record RefreshTokensCommand(string RefreshToken) : IRequest<RefreshTokensCommandResponse>
{
}

public class RefreshTokensCommandResponse
{
    public JwtPairTokens Tokens { get; set; } = default!;
}

public sealed class RefreshTokensCommandHandler : IRequestHandler<RefreshTokensCommand, RefreshTokensCommandResponse>
{
    private readonly IJwtHelper _jwtHelper;
    
    public RefreshTokensCommandHandler(IJwtHelper jwtHelper)
    {
        _jwtHelper = jwtHelper;
    }

    public Task<RefreshTokensCommandResponse> Handle(RefreshTokensCommand request, CancellationToken cancellationToken)
    {
        if (_jwtHelper.Validate(request.RefreshToken, out var payload) == false)
            throw new InvalidRefreshTokenException();
        
        return Task.FromResult(new RefreshTokensCommandResponse {Tokens = _jwtHelper.Create(payload)});
    }
}