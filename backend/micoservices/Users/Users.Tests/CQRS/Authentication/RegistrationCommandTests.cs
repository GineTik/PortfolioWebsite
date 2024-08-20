using Moq;
using Users.Presentation.CQRS.Authentication;
using Users.Presentation.Data.Gateways.Users;
using Users.Presentation.Entities;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.CodeGenerator;
using Users.Presentation.Helpers.JwtHelper;
using Users.Presentation.Helpers.MailSender;
using Users.Presentation.Helpers.PasswordHasher;

namespace Users.Tests.CQRS.Authentication;

public class RegistrationCommandTests
{
    private readonly Mock<IUserGateway> _userGatewayMock = new();
    private readonly Mock<ICodeGenerator> _codeGeneratorMock = new();
    private readonly Mock<IMailSender> _mailSenderMock = new();
    private readonly Mock<IJwtHelper> _jwtHelperMock = new();
    private readonly Mock<IPasswordHasher> _passwordHasherMock = new();
    private readonly RegistrationCommandHandler _handler;

    public RegistrationCommandTests()
    {
        _handler = new RegistrationCommandHandler(
            _userGatewayMock.Object,
            _passwordHasherMock.Object,
            _codeGeneratorMock.Object,
            _mailSenderMock.Object,
            _jwtHelperMock.Object
        );
    }

    [Fact]
    public async Task Handle_ShouldThrowValidationResultsException_WhenRequestIsInvalid()
    {
        // Arrange
        var command = new RegistrationCommand
        {
            Email = "invalid_email", 
            Password = "password"
        };

        // Act
        Func<Task> act = () => _handler.Handle(command, default);

        // Assert
        await Assert.ThrowsAsync<ValidationResultsException>(act);
    }

    [Fact]
    public async Task Handle_ShouldThrowInvalidEmailOrPasswordException_WhenEmailAlreadyExists()
    {
        // Arrange
        _userGatewayMock.Setup(
                o => o.GetByEmailAsync(
                    It.IsAny<string>()))
            .ReturnsAsync(new User());
        
        var command = new RegistrationCommand
        {
            Email = "email@test.com",
            Password = "password"
        };

        // Act
        Func<Task> act = () => _handler.Handle(command, default);

        // Assert
        await Assert.ThrowsAsync<InvalidEmailOrPasswordException>(act);
    }

    [Fact]
    public async Task Handle_ShouldReturnRegistrationCommandResponse_WhenRegistrationIsSuccessful()
    {
        // Arrange
        var expectedTokens = new JwtPairTokens { AccessToken = "1" };
        _userGatewayMock.Setup(
                o => o.GetByEmailAsync(
                    It.IsAny<string>()))
            .ReturnsAsync((User?)null);
        _codeGeneratorMock.Setup(
                o => o.Generate())
            .Returns(123456);
        _userGatewayMock.Setup(
                o => o.TryAddAsync(
                    It.IsAny<User>()))
            .ReturnsAsync(1);
        _jwtHelperMock.Setup(
                o => o.Create(
                    It.IsAny<JwtPayload>()))
            .Returns(expectedTokens);
        
        var command = new RegistrationCommand
        {
            Email = "newuser@test.com", 
            Password = "password"
        };
        
        // Act
        var result = await _handler.Handle(command, default);

        // Assert
        Assert.NotNull(result);
        Assert.False(result.IsEmailConfirmed);
        Assert.Equal(1, result.UserId);
        Assert.Equal(expectedTokens, result.Tokens);
    }
    
    [Fact]
    public async Task Handle_ShouldSendConfirmationMail_WhenEmailIsNotConfirmed()
    {
        // Arrange
        _userGatewayMock.Setup(u => u.GetByEmailAsync(It.IsAny<string>())).ReturnsAsync((User?)null);
        _codeGeneratorMock.Setup(c => c.Generate()).Returns(123456);
        _userGatewayMock.Setup(u => u.TryAddAsync(It.IsAny<User>())).ReturnsAsync(1);

        var command = new RegistrationCommand
        {
            Email = "newuser@test.com",
            Password = "password"
        };
        
        // Act
        await _handler.Handle(command, default);

        // Assert
        _mailSenderMock.Verify(m => m.SendConfirmationMail(command.Email, 123456), Times.Once);
    }
}