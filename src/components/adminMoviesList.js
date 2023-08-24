import { useContext } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { usePagination } from "../utils/usePagination"
import PropTypes from "prop-types"

import { CustomContext } from "../utils/context"
import { CustomButton } from "./customButton"
import { deleteMovie } from "../store/movies/movie.actions"
import { FaTrash } from "react-icons/fa"

export const AdminMoviesList = ({ list }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { titleSearch, setTitleSearch,
        genresSearch, setGenresSearch,
        yearSearch, setYearSearch,
        searchExecuted, setSearchExecuted } = useContext(CustomContext)

    const {
        visibleMovies,
        currentPage,
        endIndex,
        handleNextPage,
        handlePrevPage,
    } = usePagination(1, 20, list)

    const handleDelete = (movieID) => {
        dispatch(deleteMovie(movieID))

        if (titleSearch.length) {
            const newTitleSearche = titleSearch.filter((movie) => movie.id !== movieID)

            setTitleSearch(newTitleSearche)
        } else if (yearSearch.length) {
            const newYearSearch = yearSearch.filter((movie) => movie.id !== movieID)

            setYearSearch(newYearSearch)
        } else if (genresSearch.length) {
            const newGenreSearch = genresSearch.filter((movie) => movie.id !== movieID)

            setGenresSearch(newGenreSearch)
        }
    }

    const shovDetails = (movieID) => {
        navigate(`/moreinfo/${ movieID }`)
    }

    return (
        <>
            <table className={ 'admin_movies_list' }>
                <thead>
                    <tr>
                        <th className={ 'thstyle' }> №</th>
                        <th className={ 'thstyle' }>Title</th>
                        <th className={ 'thstyle' }>Genres</th>
                        <th className={ 'thstyle' }>Director</th>
                        <th className={ 'thstyle' }>Year</th>
                        <th className={ 'thstyle' }>Duration</th>
                        <th className={ 'thstyle' }>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        visibleMovies.map((movie, index) => (
                            <tr key={ movie?.id } className={ 'admin_movies_list movies_list_row' }>
                                <td onClick={ () => shovDetails(movie.id) } className={ 'admin_movies_list_details index' }>{ index + 1 }</td>
                                <td onClick={ () => shovDetails(movie.id) } className={ 'admin_movies_list_details' }>{ movie?.title }</td>
                                <td onClick={ () => shovDetails(movie.id) } className={ 'admin_movies_list_details' }>{ `${ movie?.genres.map((ganre) => ganre) },` }</td>
                                <td onClick={ () => shovDetails(movie.id) } className={ 'admin_movies_list_details' }>{ movie?.director }</td>
                                <td onClick={ () => shovDetails(movie.id) } className={ 'admin_movies_list_details' }>{ movie?.year }</td>
                                <td onClick={ () => shovDetails(movie.id) } className={ 'admin_movies_list_details' }>{ movie?.runtime } min</td>
                                <td onClick={ () => handleDelete(movie.id) } className={ 'admin_movies_list_trash' }><FaTrash/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={ 'button_container' }>
                <CustomButton className={ 'pagination_button' } onClick={ handlePrevPage } text={ '←' } disabled={ currentPage === 1 }/>
                <CustomButton className={ 'pagination_button' } onClick={ handleNextPage } disabled={ endIndex >= list.length } text={ '→' }/>
            </div>
    </>
    )
}

AdminMoviesList.propTypes = {
    list: PropTypes.array,
}