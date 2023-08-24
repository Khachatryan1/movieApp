import React, { useEffect, useState } from "react"

import {ClimbingBoxLoader} from "react-spinners"
import PauseOnHover from "../components/slider/slider"
import {MoviePagination} from "../components/moviePagination"

export const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])


    return (
        <div>
            {
                loading ? <ClimbingBoxLoader
                    color={ '#ad1824' }
                    size={ 40 }
                    cssOverride={{ margin: '180px auto' }}
                /> :
                <>
                    <PauseOnHover/>
                    <MoviePagination/>
                </>
            }

        </div>
    )
}
