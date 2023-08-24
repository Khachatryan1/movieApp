import React, { useContext } from "react"
import { useNavigate } from "react-router"

import { CustomContext } from "../utils/context"
import PropTypes from "prop-types"

export const RenderList = (({ list }) => {
    const navigate = useNavigate()
    const { containerRef } = useContext(CustomContext)

    const handleClick = (movie) => {
        navigate(`/moreinfo/${ movie?.id }`)
        containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {
                list.map((movie) => (
                    <div key={ movie.id } className={ 'movie_card' }>
                        <div onClick={ () => handleClick(movie) } className={ 'movie_card_image_container' }>
                            <img src={ `${ movie.posterUrl }` } alt={ `${ movie.title }` }/>
                            <div className="play_symbol">▶</div>
                        </div>
                        <div className={ 'movie_card_description' }>
                            <h3>{ movie.title }</h3>
                            <p>{ `${ movie.genres[0] } ● ${ movie.year } ● ${ movie.runtime } min` }</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
})


RenderList.propTypes = {
    list: PropTypes.array,
}