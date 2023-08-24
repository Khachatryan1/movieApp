import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

import { CustomInput } from "./customInput"

import { MoviesDB } from "../data"
import { addMovie } from "../store/movies/movie.actions"

export const CreateMovie = () => {
    const descriptionRef = useRef()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = (data) => {
        data.id = Date.now()
        data.plot = descriptionRef.current.value
        data.genres = [data.genre, data.genre2, data.genre3]

        dispatch(addMovie([...MoviesDB, data]))
        reset()
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className={ 'create_form' }>
                <fieldset className={ 'create_form_blocks' }>
                    <legend>Required fields</legend>
                    <div>
                        <p>Movie title</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Title' }
                            type={ 'text' }
                            register={ register }
                            name="title"
                            required={ true }
                            errors={ errors.title }
                        />
                    </div>
                    <div>
                        <p>Movie year</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Year' }
                            type={ 'number' }
                            register={ register }
                            name="year"
                            required={ true }
                            errors={ errors.year }
                        />
                    </div>

                    <div>
                        <p>Movie genres</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Genre' }
                            type={ 'text' }
                            register={ register }
                            name="genre"
                            required={ true }
                            errors={ errors.genre }
                        />
                    </div>
                    <div>
                        <p>Movie poster URL</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Poster' }
                            type={ 'url' }
                            register={ register }
                            name="posterUrl"
                            required={ true }
                            errors={ errors.posterUrl }
                        />
                    </div>
                    <div>
                        <p>Movie runtime</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Runtime' }
                            type={ 'number' }
                            register={ register }
                            required={ true }
                            name="runtime"
                            errors={ errors.runtime }
                        />
                    </div>
                </fieldset>
                <fieldset className={ 'create_form_blocks' }>
                    <legend>Optional fields</legend>
                    <div>
                        <p>Movie subgenre</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Subgenre' }
                            type={ 'text' }
                            register={ register }
                            name="genre2"
                            errors={ errors.genre2 }
                        />
                    </div>
                    <div>
                        <p>Movie subgenre</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Subgenre' }
                            type={ 'text' }
                            register={ register }
                            name="genre3"
                            errors={ errors.genre3 }
                        />
                    </div>
                    <div>
                        <p>Movie director</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Director' }
                            type={ 'text' }
                            register={ register }
                            name="director"
                            errors={ errors.director }
                        />
                    </div>
                    <div>
                        <p>Movie actors</p>
                        <CustomInput
                            className={ 'create_movie_input' }
                            placeholder={ 'Actors' }
                            type={ 'text' }
                            register={ register }
                            name="actors"
                            errors={ errors.actors }
                        />
                    </div>
                    <div>
                        <p>Movie description</p>
                        <textarea className={ 'create_movie_input' }
                                  ref={ descriptionRef }
                                  placeholder={ 'Description' }>
                        </textarea>
                    </div>
                </fieldset>
            </div>
            <input className={ 'create_movie_button' } type="submit" value='Create'/>
        </form>
    )
}

