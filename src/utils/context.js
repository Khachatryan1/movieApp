import { createContext, useRef, useState } from "react"
export const CustomContext = createContext()

export const CustomContextWrapper = ({ children }) => {
    const [showRegistPasswords, setShowRegistPasswords] = useState(false)
    const [searchExecuted, setSearchExecuted] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showModal , setShowModal] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [userName, setUserName] = useState("")
    const [searchedList, setSearchedList] = useState([])
    const [genresSearch, setGenresSearch] = useState([])
    const [titleSearch, setTitleSearch] = useState([])
    const [yearSearch, setYearSearch] = useState([])
    const [comments, setComments] = useState([])

    const containerRef = useRef()

    return(
        <CustomContext.Provider value={{showModal, setShowModal,
                                        showPassword, setShowPassword,
                                        showRegistPasswords, setShowRegistPasswords,
                                        userName, setUserName,
                                        isAdmin, setIsAdmin,
                                        commentText, setCommentText,
                                        comments, setComments,
                                        searchedList, setSearchedList,
                                        titleSearch, setTitleSearch,
                                        genresSearch, setGenresSearch,
                                        yearSearch, setYearSearch,
                                        searchExecuted, setSearchExecuted,
                                        containerRef
                                    }}>
            { children }
        </CustomContext.Provider>
    )
}