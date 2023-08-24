import { useContext, useState } from "react"

import { CustomContext } from "./context"
import PropTypes from "prop-types"

export function usePagination(initialPage = 1, itemsPerPage, list) {
    const [currentPage, setCurrentPage] = useState(initialPage)
    const { containerRef } = useContext(CustomContext)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const visibleMovies = list.slice(startIndex, endIndex)

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
        containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
        containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    return {
        visibleMovies,
        currentPage,
        endIndex,
        handleNextPage,
        handlePrevPage,
    }
}


usePagination.propTypes = {
    initialPage: PropTypes.number,
    itemsPerPage: PropTypes.number,
    list: PropTypes.array,
}