import { useContext, useRef } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

import { CustomButton } from "../components/customButton"
import { FaArrowRightLong } from "react-icons/fa6"
import { CustomContext } from "../utils/context"

import { FaSearch } from "react-icons/fa"




const Greeting = () => {
    const { setSearchedList } = useContext(CustomContext)

    const searchRef = useRef()
    const navigate = useNavigate()

    const { moviesList } = useSelector((store) => ({
        moviesList: store.movieReducer.moviesList
    }))


    const handleClick = () => {
        const searchText = searchRef.current.value.trim().toLowerCase()

        if (searchText) {
            const searchedList = moviesList.filter((movie) => (
                movie.title.toLowerCase().includes(searchText)
            ))

            setSearchedList(searchedList)
            navigate('search')
        } else {
            searchRef.current.focus()
        }
    }



    return (
        <>
            <div className={ 'greeting' }>
                <h1 className={ 'page_title' }>
                    Unlimited Movies, One Click Away!
                </h1>
                <FaSearch className={ 'search_icon' }/>
                <input type={ 'text' } ref={ searchRef } className={ 'search_input' } placeholder={ 'Search movies...' } />
                <FaArrowRightLong className={ 'arrow_icon' }/>
                <CustomButton text={ 'Search' } className={ 'search_button' } onClick={ handleClick } />
                <CustomButton text={ 'Homepage' } className={ 'homepage_button' } onClick={ () => navigate('./home') } />
                <FaSearch className={ 'search_button_icon' }/>
            </div>
        </>
    )
}

export default Greeting