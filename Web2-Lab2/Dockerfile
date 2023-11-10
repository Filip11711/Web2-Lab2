FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /app

COPY . .

RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app

COPY --from=build /app/out .

EXPOSE 80

ENV ASPNETCORE_URLS=http://*:80

CMD ["dotnet", "Web2-Lab2.dll"]