FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Users.Presentation/Users.Presentation.csproj", "Users.Presentation/"]
RUN dotnet restore "Users.Presentation/Users.Presentation.csproj"
COPY . .
WORKDIR "/src/Users.Presentation"
RUN dotnet build "Users.Presentation.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Users.Presentation.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Users.Presentation.dll"]
