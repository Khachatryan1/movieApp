import { useContext, useState } from "react"
import { useSelector } from "react-redux"

import { CustomContext } from "../utils/context"
import { CustomButton } from "../components/customButton"
import { AdminMoviesList } from "../components/adminMoviesList"
import { AdminSearch } from "../components/adminSearch"
import { CreateMovie } from "../components/createMovie"

import { FaUserShield } from "react-icons/fa"

export const AdminPage = () => {
    const [showAll, setShowAll] = useState(true)
    const [create, setCreate] = useState(false)
    const [find, setFind] = useState(false)

    const { containerRef, setTitleSearch,
            setGenresSearch, setYearSearch,
            searchExecuted, setSearchExecuted,
        } = useContext(CustomContext)

    const { moviesList } = useSelector((store) => ({
        moviesList: store.movieReducer.moviesList
    }))

    const createMovie = () => {
        setCreate(true)
        setShowAll(false)
        setFind(false)
        containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const showAllMovies = () => {
        setShowAll(!showAll)
        setFind(false)
        setCreate(false)
        containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const findMovie = () => {
        setFind(true)
        setCreate(false)
        setShowAll(false)
        setSearchExecuted(false)
        setTitleSearch([])
        setGenresSearch([])
        setYearSearch([])
        containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={ 'admin_page' }>
            <div className={ 'admin_aside' }>
                <div className={ 'admin_data' }>
                    <div className={ 'personal' }>
                        <FaUserShield className={ 'admin_icon' }/>
                        <h2>Admin</h2>
                    </div>
                    <p>Password:<span>password</span></p>
                    <p>Email:<span>admin@gmail.com</span></p>
                </div>
                <div className={ 'admin_actions' }>
                    <h2 style={{ color: '#c7d0d3', textAlign: 'center' }}>Actions</h2>
                    <CustomButton onClick={ showAllMovies } className={ 'admin_action_button' } text={ `${ showAll ? 'Hide' : 'Show all' }` }/>
                    <CustomButton onClick={ createMovie } className={ 'admin_action_button' } text={ 'Add movie' }/>
                    <CustomButton onClick={ findMovie } className={ 'admin_action_button' } text={ 'Search' }/>
                </div>
            </div>
            <div className={ 'admin_main' }>
                {
                    showAll ? <>
                        <h2 className={ 'admin_main_headers' }>All Movies</h2>
                        <AdminMoviesList list={ moviesList }/>
                    </> : find ? <>
                        <h2 className={ 'admin_main_headers' }>{ `${ !searchExecuted ? 'Find a Movie' : '' }` }</h2>
                        <AdminSearch/>
                    </> : create ? <>
                        <h2 className={ 'admin_main_headers' }>Create Movie</h2>
                        <CreateMovie/>
                    </> : <></>
                }
            </div>
        </div>
    )
}