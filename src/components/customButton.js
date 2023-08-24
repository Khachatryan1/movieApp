import PropTypes from "prop-types"

export const CustomButton = ({ onClick, className, text, disabled }) => {
    return (
        <button onClick={ onClick } className={ className } disabled={ disabled }>{ text }</button>
    )
}


CustomButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
}