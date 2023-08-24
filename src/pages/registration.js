import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import { CustomInput } from "../components/customInput"
import { CustomContext } from "../utils/context"

import { FaEye } from "react-icons/fa"

export const Registration = () => {
    const { showRegistPasswords, setShowRegistPasswords,
            setUserName, setIsAdmin } = useContext(CustomContext)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm()

    const showPasswords = () => {
        setShowRegistPasswords(!showRegistPasswords)
    }

    const onSubmit = (data) => {
        if (data.password !== data.repeadPassword) {
            setError('repeadPassword')
        } else {
            setUserName(data.name)
            setIsAdmin(false)
            navigate('/home')
        }
    }


    return (
        <div className='form-container'>
            <h2>Create new account</h2>
            <form className='form' onSubmit={ handleSubmit(onSubmit) }>
                <CustomInput
                    className={ 'registration_input' }
                    placeholder={ 'Username' }
                    type={ 'text' }
                    register={ register }
                    name="name"
                    required={ true }
                    errors={ errors.name }
                />
                <CustomInput
                    className={ 'registration_input' }
                    placeholder={ 'Email' }
                    type={ 'text' }
                    register={ register }
                    name="email"
                    required={ true }
                    pattern={ /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
                    errors={ errors.email }
                    errorMassage={ 'Invalid Email.' }
                />
                <CustomInput
                    className={ 'registration_input' }
                    placeholder={ 'Create password' }
                    type={ `${ showRegistPasswords ? 'text' : 'password' }` }
                    register={ register }
                    name="password"
                    required={ true }
                    errors={ errors.password }
                    errorMassage={ 'Invalid Password.' }
                />
                <CustomInput
                    className={ 'registration_input' }
                    placeholder={ 'Repeat your password' }
                    type={ `${ showRegistPasswords ? 'text' : 'password' }` }
                    register={ register }
                    name="repeadPassword"
                    required={ true }
                    errors={ errors.repeadPassword }
                    errorMassage={ 'Passwords do not match' }
                />
                <FaEye className={ 'showRegistPasswords' } onClick={ showPasswords }/>
                <input className={ 'registration_button' } type="submit" value='Log In'/>
            </form>
        </div>
    )
}