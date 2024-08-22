# Устанавливаем базовый образ .NET SDK для сборки
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы проекта в контейнер
COPY . ./

# Восстанавливаем зависимости (nuget-пакеты)
RUN dotnet restore

# Сборка и публикация проекта в режим Release
RUN dotnet publish -c Release -o out

# Финальный этап: используем более легковесный образ для запуска приложения
FROM mcr.microsoft.com/dotnet/aspnet:7.0

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем собранные файлы из предыдущего этапа в текущий контейнер
COPY --from=build /app/out .

EXPOSE 3001

ENTRYPOINT ["dotnet", "Users.Presentation.dll"]