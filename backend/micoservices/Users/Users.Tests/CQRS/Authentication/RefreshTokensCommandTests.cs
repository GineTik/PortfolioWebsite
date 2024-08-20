using Moq;
using Users.Presentation.CQRS.Authentication;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.JwtHelper;

namespace Users.Tests.CQRS.Authentication;

public class RefreshTokensCommandTests
{
    private readonly Mock<IJwtHelper> _jwtHelperMock = new();

    [Fact]
    public async Task Handle_ShouldThrowInvalidRefreshTokenException_WhenValidateRefreshTokenFailed()
    {
        // arrange
        var payload = new JwtPayload();
        _jwtHelperMock.Setup(
                o => o.Validate(
                    It.IsAny<string>(),
                    out payload))
            .Returns(false);

        var command = new RefreshTokensCommand("token");
        var handler = new RefreshTokensCommandHandler(
            _jwtHelperMock.Object);

        // act
        var act = () => handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<InvalidRefreshTokenException>(act);
    }
    
    [Fact]
    public async Task Handle_ShouldReturnNewTokens_WhenValidateSuccessfully()
    {
        // arrange
        var payload = new JwtPayload();
        var expectedTokens = new JwtPairTokens { AccessToken = "1", RefreshToken = "1"};
        _jwtHelperMock.Setup(
                o => o.Validate(
                    It.IsAny<string>(),
                    out payload))
            .Returns(true);
        _jwtHelperMock.Setup(
                o => o.Create(
                    It.IsAny<JwtPayload>()))
            .Returns(expectedTokens);

        var command = new RefreshTokensCommand("token");
        var handler = new RefreshTokensCommandHandler(
            _jwtHelperMock.Object);

        // act
        var result = await handler.Handle(command, default);

        // assert
        Assert.Equal(expectedTokens, result.Tokens);
    }
}