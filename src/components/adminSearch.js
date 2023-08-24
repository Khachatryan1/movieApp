import { useContext, useRef, useState } from "react"
import { useSelector } from "react-redux"

import { CustomContext } from "../utils/context"
import { CustomButton } from "./customButton"
import { AdminMoviesList } from "./adminMoviesList"

import movieNotFound from "../assets/images/nomovies.png"

export const AdminSearch = () => {
    const [titleValue, setTitleValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    const [genreValue, setGenreValue] = useState('')

    const { titleSearch, setTitleSearch,
        genresSearch, setGenresSearch,
        yearSearch, setYearSearch,
        searchExecuted, setSearchExecuted } = useContext(CustomContext)

    const titleRef = useRef()
    const yearRef = useRef()
    const genreRef = useRef()

    const { moviesList } = useSelector((store) => ({
        moviesList: store.movieReducer.moviesList
    }))

    const searchByTitle = () => {
        const value = titleRef.current.value.trim()

        if (value) {
            const titleSearchResult = moviesList.filter((movie) => (
                movie.title.toLowerCase().includes(value.toLowerCase())
            ))

            setTitleValue(value)
            setTitleSearch(titleSearchResult)
            setSearchExecuted(true)
        } else {
            titleRef.current.focus()
        }
    }

    const searchByGenres = () => {
        const value = genreRef.current.value.trim()

        if (value) {
            const genresSearchResult = moviesList.filter((movie) =>
                movie.genres.some((genre) => genre.toLowerCase() === value.toLowerCase())
            )

            setGenreValue(value)
            setGenresSearch(genresSearchResult)
            setSearchExecuted(true)
        } else {
            genreRef.current.focus()
        }
    }

    const searchByYear = () => {
        const value = yearRef.current.value.trim()

        if (value) {
            const yearSearchResult = moviesList.filter((movie) => movie.year === value)

            setYearValue(value)
            setYearSearch(yearSearchResult)
            setSearchExecuted(true)
        } else {
            yearRef.current.focus()
        }
    }


    return (
        <>
            {
                !searchExecuted ? (
                    <div className={ 'search_blocks_container' }>
                        <div className={ 'search_blocks' }>
                            <p>Search by Title</p>
                            <input placeholder={'Movie title...'} className={ 'search_blocks_input' } ref={ titleRef }/>
                            <CustomButton onClick={ searchByTitle } className={ 'search_blocks_button' } text={ 'Find' }/>
                        </div>
                        <div className={ 'search_blocks' }>
                            <p>Search by Year</p>
                            <input type={ 'number' } placeholder={'Movie year...'} className={ 'search_blocks_input' } ref={ yearRef }/>
                            <CustomButton onClick={ searchByYear } className={ 'search_blocks_button' } text={ 'Find' }/>
                        </div>
                        <div className={ 'search_blocks' }>
                            <p>Search by Genre</p>
                            <input placeholder={ 'Movie genre...' } className={ 'search_blocks_input' } ref={ genreRef }/>
                            <CustomButton onClick={ searchByGenres } className={ 'search_blocks_button' } text={ 'Find' }/>
                        </div>
                    </div>
                ) : (
                    <>
                        {
                            titleSearch.length ? (
                                <>
                                    <h2 className={ 'admin_main_headers' }>{ `${ titleSearch.length } Movies that have an ${ titleValue.toUpperCase() } in their titles` }</h2>
                                    <AdminMoviesList list={ titleSearch } />
                                </>
                            ) : yearSearch.length ? (
                                <>
                                    <h2 className={ 'admin_main_headers' }>{ `${ yearSearch.length } Films of ${ yearValue } year` }</h2>
                                    <AdminMoviesList list={ yearSearch } />
                                </>
                            ) : genresSearch.length ? (
                                <>
                                    <h2 className={ 'admin_main_headers' }>{ `${ genresSearch.length } Movies in the ${ genreValue.toUpperCase() } genre` }</h2>
                                    <AdminMoviesList list={ genresSearch } />
                                </>
                            ) : (<div>
                                <h2 className={ 'admin_main_headers' }>No matches</h2>
                                <img className={ 'admin_not_found' } src={ movieNotFound } alt={ 'movie not found' }/>
                            </div>)
                        }
                    </>
                )
            }
        </>
    )
}