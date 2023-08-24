import { ADD_MOVIE, DELETE_MOVIE } from "./movie.types"

export const addMovie = ( list ) => {
    return{
        type: ADD_MOVIE,
        payload: list
    }
}

export const deleteMovie = (movieId) => {
    return {
        type: DELETE_MOVIE,
        payload: movieId,
    }
}