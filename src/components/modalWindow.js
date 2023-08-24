import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import { CustomContext } from "../utils/context"
import { CustomInput } from "./customInput"
import { CustomButton } from "./customButton"

import { MdOutlineAlternateEmail } from "react-icons/md"
import { FaX } from "react-icons/fa6"
import { FaEye } from "react-icons/fa"
import { ImExit } from "react-icons/im"



export const ModalWindow = () => {
    const { userName, setUserName,
            showModal, setShowModal,
            showPassword, setShowPassword,
            isAdmin, setIsAdmin } = useContext(CustomContext)

    const navigate = useNavigate()

    const admin = {
        email: 'admin@gmail.com',
        password: 'password',
        isAdmin
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm()

    const onSubmit = (data) => {
        if (data?.email === admin.email && data?.password === admin.password) {
            navigate('/adminpage')
            setShowModal(false)
            setIsAdmin(true)
        } else {
            if (data?.email !== admin.email) {
                setError("email")
            }
            if (data?.password !== admin.password) {
                setError("password")
            }
        }
    }

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleModalClose = () => {
        setShowModal(!showModal)
        setShowPassword(false)
    }

    const onRegistration = () => {
        setShowModal(!showModal)
        navigate('/registration')
    }

    const handleExit = () => {
        setIsAdmin(false)
        setUserName("")
        setShowModal(false)
        navigate('/home')
    }

    return (
        <div className={ 'modal_window' }>
            <FaX onClick={ handleModalClose } className={ 'modal_window_close' }/>
            <h2>Sign in to your account</h2>
            <form className={ 'login-form' } onSubmit={ handleSubmit(onSubmit) }>
                <MdOutlineAlternateEmail className={ 'email-icon' }/>
                <CustomInput
                    className={ 'modal_window_input' }
                    placeholder={ 'Your email' }
                    type={ 'text' }
                    name={ 'email' }
                    register={ register }
                    required={ true }
                    pattern={ /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
                    errors={ errors.email }
                    errorMassage={ 'Invalid Email.' }
                />
                <FaEye onClick={ handlePasswordVisibility } className={ 'password-icon' }/>
                <CustomInput
                    className={ 'modal_window_input' }
                    placeholder={ 'Your password' }
                    type={ `${ showPassword ? 'text' : 'password' }` }
                    name={ 'password' }
                    register={ register }
                    required={ true }
                    errors={ errors.password }
                    errorMassage={ 'Invalid Password.' }
                />
                <input className={ 'sign_in_button' } type="submit" value='Sign In'/>
            </form>
            <CustomButton onClick={ onRegistration } className={ 'create_new_account_button' } text={ 'Create new account' }/>
            {
                userName || isAdmin ? <div>
                    <CustomButton onClick={ handleExit } className={ 'create_new_account_button exit' } text={ 'Leave' }/>
                    <ImExit className={ 'exit-icon' }/>
                </div> : <></>
            }
        </div>
    )
}

