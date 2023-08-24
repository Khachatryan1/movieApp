import { useSelector } from "react-redux"

import { CustomButton } from "./customButton"
import { RenderList } from "./renderList"
import { usePagination } from "../utils/usePagination"

export const MoviePagination = () => {
    const { moviesList } = useSelector((store) => ({
        moviesList: store.movieReducer.moviesList
    }))

    const {
        visibleMovies,
        currentPage,
        endIndex,
        handleNextPage,
        handlePrevPage,
    } = usePagination(1, 24, moviesList)

    const recommendedMovies = moviesList.filter(movie => movie.year > 2013)

    return (
        <div className={ 'movies_list_container' }>
            <h2 className={ 'list_title' }>Recommended</h2>
            <div className={ 'recommended_movies' }>
                <RenderList list={ recommendedMovies?.slice().sort(() => Math.random() - 0.5).slice(0, 5) }/>
            </div>
            <h2 className={ 'list_title' }>Movies List</h2>
            <div className={ 'movies_list' }>
                <RenderList list={ visibleMovies }/>
            </div>
            <div className={ 'button_container' }>
                <CustomButton className={ 'pagination_button' } onClick={ handlePrevPage } text={ '←' } disabled={ currentPage === 1 }/>
                <CustomButton className={ 'pagination_button' } onClick={ handleNextPage } disabled={ endIndex >= moviesList.length } text={ '→' }/>
            </div>
        </div>
    );
};
