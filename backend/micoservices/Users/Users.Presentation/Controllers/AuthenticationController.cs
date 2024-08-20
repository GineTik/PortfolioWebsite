using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Users.Presentation.CQRS.Authentication;

namespace Users.Presentation.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthenticationController : ControllerBase
{
    private readonly IMediator _mediator;
    
    public AuthenticationController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("login")]
    public async Task<LoginCommandResponse> Login(LoginCommand request)
    {
        return await _mediator.Send(request);
    }
    
    [HttpPost("registration")]
    public async Task<RegistrationCommandResponse> Registration(RegistrationCommand request)
    {
        return await _mediator.Send(request);
    }
    
    [HttpGet("refresh")]
    [Authorize]
    public async Task<RefreshTokensCommandResponse> Refresh(string refresh)
    {
        return await _mediator.Send(new RefreshTokensCommand(refresh));
    }
    
    [HttpGet("confirm-email")]
    public async Task ConfirmEmail(int userId, int code)
    {
        await _mediator.Send(new ConfirmEmailCommand(userId, code));
    }
}