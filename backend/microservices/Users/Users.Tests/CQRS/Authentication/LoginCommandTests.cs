using Moq;
using Users.Presentation.CQRS.Authentication;
using Users.Presentation.Data.Gateways.Users;
using Users.Presentation.Entities;
using Users.Presentation.Exceptions;
using Users.Presentation.Helpers.CodeGenerator;
using Users.Presentation.Helpers.MailSender;
using Users.Presentation.Helpers.PasswordHasher;

namespace Users.Tests.CQRS.Authentication;

public class LoginCommandTests
{
    private readonly Mock<IUserGateway> _userGatewayMock = new();
    private readonly Mock<IPasswordHasher> _passwordHasherMock = new();
    private readonly Mock<ICodeGenerator> _codeGeneratorMock = new();
    private readonly Mock<IMailSender> _mailSenderMock = new();
    private readonly LoginCommandHandler _handler;
    
    public LoginCommandTests()
    {
        _handler = new LoginCommandHandler(
            _userGatewayMock.Object,
            _passwordHasherMock.Object,
            _codeGeneratorMock.Object,
            _mailSenderMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldThrowValidationResultsException_WhenPasswordLengthLess3Letter()
    {
        // arrange
        var command = new LoginCommand
        {
            Email = "email@test.com",
            Password = "1"
        };
        
        // act
        var act = () => _handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<ValidationResultsException>(act);
    }
    
    [Fact]
    public async Task Handle_ShouldThrowValidationResultsException_WhenEmailHasIncorrectFormat()
    {
        // arrange
        var command = new LoginCommand
        {
            Email = "email",
            Password = "password"
        };
        
        // act
        var act = () => _handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<ValidationResultsException>(act);
    }
    
    [Fact]
    public async Task Handle_ShouldThrowInvalidEmailOrPasswordException_WhenUserNotExists()
    {
        // arrange
        _userGatewayMock.Setup(
                o => o.GetByEmailAsync(
                    It.IsAny<string>()))
            .ReturnsAsync((User?)null);
        
        var command = new LoginCommand
        {
            Email = "email@test.com",
            Password = "password"
        };
        
        // act
        var act = () => _handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<InvalidEmailOrPasswordException>(act);
    }
    
    [Fact]
    public async Task Handle_ShouldThrowInvalidEmailOrPasswordException_WhenPasswordIncorrect()
    {
        // arrange
        _userGatewayMock.Setup(
                o => o.GetByEmailAsync(
                    It.IsAny<string>()))
            .ReturnsAsync(new User());
        _passwordHasherMock.Setup(
                o => o.Compare(
                    It.IsAny<string>(),
                    It.IsAny<string>()))
            .Returns(false);

        var command = new LoginCommand
        {
            Email = "email@test.com",
            Password = "password"
        };
        
        // act
        var act = () => _handler.Handle(command, default);

        // assert
        await Assert.ThrowsAsync<InvalidEmailOrPasswordException>(act);
    }
    
    [Fact]
    public async Task Handle_ShouldSendConfirmationMail_WhenEmailIsNotConfirmed()
    {
        // Arrange
        _userGatewayMock.Setup(o => o.GetByEmailAsync(It.IsAny<string>())).ReturnsAsync(new User());
        _passwordHasherMock.Setup(o => o.Compare(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
        _codeGeneratorMock.Setup(o => o.Generate()).Returns(123456);
        
        var command = new LoginCommand { Email = "email@test.com", Password = "password" }; 

        // Act
        await _handler.Handle(command, default);

        // Assert
        _mailSenderMock.Verify(o => o.SendConfirmationMail(command.Email, 123456), Times.Once);
    }

    [Fact]
    public async Task Handle_ShouldReturnLoginCommandResponse_WhenLoginIsSuccessful()
    {
        // Arrange
        _userGatewayMock.Setup(o => o.GetByEmailAsync(It.IsAny<string>())).ReturnsAsync(new User() {Id = 1});
        _passwordHasherMock.Setup(o => o.Compare(It.IsAny<string>(), It.IsAny<string>())).Returns(true);

        var command = new LoginCommand { Email = "email@test.com", Password = "password" };
        
        // Act
        var result = await _handler.Handle(command, default);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(1, result.UserId);
    }
}