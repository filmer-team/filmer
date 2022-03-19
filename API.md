# API Overview
(POST requests include body structure)
## Unauthenticated
- GET `/api/random_movie` get a random movie
```
{
    "movie_id": "{movie_id}",
    "title": "{string}"
}
```
- GET `/api/movie/{movie_id}` get info about a movie   
[reference](https://developers.themoviedb.org/3/movies/get-movie-details)

## Authenticated
- GET  `/api/reaction/` get a list of a reactions for current user
```
[
    {
        "movie_id": "{movie_id}",
        "like": true/false,
        "seen": true/false
    },
    ...
]
```
- POST `/api/reaction/` create a reaction for current user
```
{
    "movie_id": "{movie_id}",
    "like": true/false
    "seen": true/talse
}
```

## Authentication
- POST `/api/auth/register/` register 
```
{
    "email": "{email}",
    "password": "{password(>8 chars)}",
    "username": "{username}"
}
```
- POST `/api/auth/login/` log in
```
{
    "password": "{password}",
    "username": "{username}"
}
```