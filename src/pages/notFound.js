import pagenotfound from "../assets/images/pagenotfound.png"

export const NotFound = () => {
    return (
        <div className={ 'pagenotfound_container' }>
            <img src={ pagenotfound } alt={ 'pagenotfound' }/>
        </div>
    )
}