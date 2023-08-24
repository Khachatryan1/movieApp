import { combineReducers } from "redux"
import { movieReducer } from "./movies/movie.reducer"


export const reducer = combineReducers({
    movieReducer: movieReducer,
})