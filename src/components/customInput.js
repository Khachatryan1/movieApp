import PropTypes from "prop-types"

export const CustomInput = ({ type, className, placeholder, name, pattern, errors, errorMassage, required, register }) => {

    return (
        <>
            <input style={ errors ? { border: '1px solid red' } : {}}
                   className={ className }
                   placeholder={ placeholder }
                   type={ type }
                   { ...register(name, { required, pattern }) }
            />
            { errors && <p className={ 'error_massage' }>
                { errorMassage ? errorMassage : `${ name } is required.` }
            </p> }
        </>
    )
}


CustomInput.propTypes = {
    register: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    errors: PropTypes.string,
    errorMassage: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.any,
}
