import React, { useEffect, useState, useContext } from "react"
import { useDispatch } from "react-redux"

import { Header } from "./components/header"
import { Registration } from "./pages/registration"
import { Home } from "./pages/home"
import { NotFound } from "./pages/notFound"
import { MoreInfo } from "./pages/moreInfo"
import { SearchedMovies } from "./pages/searchedMovies"
import { AdminPage } from "./pages/adminPage"
import { ClimbingBoxLoader } from "react-spinners"

import { Routes, Route } from "react-router"
import { addMovie } from "./store/movies/movie.actions"
import { CustomContext } from "./utils/context"

import "./assets/styles/style.scss"
import { MoviesDB } from "./data"


const LazyGreeting = React.lazy(() => import("./pages/greeting"))


function App() {
    const { showModal } = useContext(CustomContext)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()


    useEffect(() => {
        setTimeout(() => {
            dispatch(addMovie([...MoviesDB]))
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            {
                loading ? <ClimbingBoxLoader
                        color={ '#18a7ad' }
                        size={ 40 }
                        cssOverride={{ margin: '200px auto' }}
                    /> :

                    <div className={ `${ showModal ? 'modal_open' : 'app' }` }>
                        <Routes>
                            <Route path={ '/' } element={ <Header/> }>
                                <Route index element={
                                    <React.Suspense fallback={ <ClimbingBoxLoader/> }>
                                        <LazyGreeting/>
                                    </React.Suspense>
                                }/>
                                <Route  path={ 'home' } element={ <Home/> }/>
                                <Route path={ 'moreinfo' } element={ <MoreInfo/> }/>
                                <Route path={ 'moreinfo/:id' } element={ <MoreInfo/> }/>
                                <Route path={ 'registration' } element={ <Registration/> }/>
                                <Route path={ 'search' } element={ <SearchedMovies/> }/>
                                <Route path={ 'adminpage' } element={ <AdminPage/> }/>
                                <Route path={ '*' } element={ <NotFound/> }/>
                            </Route>
                        </Routes>
                    </div>
            }
        </>
    );
}

export default App;
