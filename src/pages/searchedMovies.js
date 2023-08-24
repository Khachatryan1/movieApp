import { useContext } from "react"

import { CustomContext } from "../utils/context"
import { RenderList } from "../components/renderList"

import movieNotFound from "../assets/images/nomovies.png"


export const SearchedMovies = () => {
    const { searchedList } = useContext(CustomContext)

    return (
        <>
            <h2 className={ 'search_headers' }>{ searchedList.length ? 'Searching results' : 'Movie not found' }</h2>
            {
                searchedList.length ? <div className={ 'search_result' }>
                    <RenderList list={ searchedList }/>
                </div> :
                    <div className={ 'movie_not_found_image_container' }>
                        <img src={ movieNotFound } alt={ 'movie not found' }/>
                    </div>
            }
        </>
    )
}