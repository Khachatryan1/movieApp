import { ADD_MOVIE, DELETE_MOVIE } from "./movie.types"

const initialState = {
    moviesList: []
}


export const movieReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_MOVIE:
            return {
                ...state,
                moviesList: action.payload
            }

        case DELETE_MOVIE:
            return {
                ...state,
                moviesList: state.moviesList.filter((movie) => movie.id !== action.payload),
            }

        default:
            return state
    }
}





