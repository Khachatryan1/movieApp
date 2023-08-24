import logo from "../assets/images/logo_b.png"
import { memo } from "react"

export const Footer = memo(() => {
    return (
        <div className={ 'footer' }>
            <div className={ 'footer_image_container' }>
                <img src={ logo } alt={ logo }/>
            </div>
            <p>© Sargis Khachatryan</p>
        </div>
    )
})