using Moq;
using Users.Presentation.CQRS.Authentication;
using Users.Presentation.Data.Gateways.Users;
using Users.Presentation.Entities;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.JwtHelper;

namespace Users.Tests.CQRS.Authentication;

public class ConfirmEmailCommandTests
{
    private readonly Mock<IUserGateway> _userGatewayMock = new();
    private readonly Mock<IJwtHelper> _jwtHelperMock = new();

    [Fact]
    public async Task Handle_ShouldReturnNewJwtTokens_WhenUserAlreadyConfirmedEmail()
    {
        // arrange
        var expectedTokens = new JwtPairTokens { AccessToken = "1", RefreshToken = "1"};
        _jwtHelperMock.Setup(
            o => o.Create(
                It.IsAny<JwtPayload>()))
            .Returns(expectedTokens);
        _userGatewayMock.Setup(
                o => o.GetByIdAsync(
                    It.IsAny<int>()))
            .ReturnsAsync(new User {IsEmailConfirmed = true, ConfirmationEmailCode = 0});
        
        var command = new ConfirmEmailCommand(0, 0);
        var handler = new ConfirmEmailCommandHandler(
            _userGatewayMock.Object,
            _jwtHelperMock.Object);

        // act
        var result = await handler.Handle(command, default);

        // assert
        Assert.Equal(expectedTokens, result.Tokens);
    }
    
    [Fact]
    public async Task Handle_ShouldThrowInvalidConfirmationEmailCodeException_WhenUserNotExists()
    {
        // arrange
        _userGatewayMock.Setup(
                o => o.GetByIdAsync(
                    It.IsAny<int>()))
            .ReturnsAsync((User?)null);
        
        var command = new ConfirmEmailCommand(0, 0);
        var handler = new ConfirmEmailCommandHandler(
            _userGatewayMock.Object,
            _jwtHelperMock.Object);

        // act
        var act = () => handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<InvalidConfirmationEmailCodeException>(act);
    }
    
    [Fact]
    public async Task Handle_ShouldThrowInvalidConfirmationEmailCodeException_WhenIncorrectConfirmationCode()
    {
        // arrange
        _userGatewayMock.Setup(
                o => o.GetByIdAsync(
                    It.IsAny<int>()))
            .ReturnsAsync(new User {ConfirmationEmailCode = 1});
        
        var command = new ConfirmEmailCommand(0, 0);
        var handler = new ConfirmEmailCommandHandler(
            _userGatewayMock.Object,
            _jwtHelperMock.Object);

        // act
        var act = () => handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<InvalidConfirmationEmailCodeException>(act);
    } 
}