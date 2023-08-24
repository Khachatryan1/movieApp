import { memo, useContext } from "react"
import { useNavigate } from "react-router"

import { CustomContext } from "../utils/context"
import { Footer } from "./footer"
import { Outlet } from "react-router-dom"
import { ModalWindow } from "./modalWindow"
import logo from "../assets/images/logo_b.png"

import { MdAdminPanelSettings } from "react-icons/md"
import { FaHome, FaSearch, FaUserCircle, FaUserPlus } from "react-icons/fa"

export const Header = memo(() => {
    const { showModal, setShowModal,
            isAdmin, userName,
            containerRef } = useContext(CustomContext)

    const navigate = useNavigate()

    return (
        <>
            {
                showModal && <ModalWindow/>
            }
            <div className={ 'header' }>
                <div className={ 'header_image_container' }>
                    <img src={ logo } alt={ 'logo' } onClick={ () => navigate('/home') }/>
                </div>
                <div className={ 'header_right_side' }>
                    <p className={ 'user_name' }>{ `${ isAdmin ? 'Admin': userName ? userName : 'unknown' }` }</p>
                    <div className={ 'header_icon_container' }>
                        {
                            isAdmin && <MdAdminPanelSettings onClick={ () => navigate('adminpage') } className={ 'user_icon' }/>
                        }
                    </div>
                    <div className={ 'header_icon_container' }>
                        <FaHome onClick={ () => navigate('/home') }/>
                    </div>
                    <div className={ 'header_icon_container' }>
                        <FaSearch onClick={ () => navigate('/') }/>
                    </div>
                    <div className={ 'header_icon_container' }>
                        {
                            isAdmin || userName ? <FaUserCircle className={ 'user_icon' } onClick={ () => setShowModal(!showModal) }/>
                                : <FaUserPlus className={ 'user_icon' } onClick={ () => setShowModal(!showModal) }/>
                        }
                    </div>
                </div>
            </div>
            <div  ref={ containerRef } className={ 'main' }>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
})