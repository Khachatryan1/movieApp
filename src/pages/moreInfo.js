import { useContext, useRef} from "react"
import { useParams } from "react-router"
import { useSelector } from "react-redux"

import { RenderList } from "../components/renderList"
import { CustomContext } from "../utils/context"
import { CustomButton } from "../components/customButton"

import { FaEdit, FaTrashAlt, FaUserAlt } from "react-icons/fa"

export const MoreInfo = () => {
    const { setShowModal, isAdmin, userName,
            comments, setComments } = useContext(CustomContext)

    const params = useParams()
    const commentRef = useRef()

    const { moviesList } = useSelector((store) => ({
        moviesList: store.movieReducer.moviesList,
    }))

    const current = moviesList?.find((movie) => movie?.id === +params?.id)

    const similarFilms = moviesList?.filter(
        (movie) => movie?.genres[0] === current?.genres[0]
    )

    const handleAddComent = () => {
        const text = commentRef.current.value.trim()

        if (text) {
            const newComment = {
                name: isAdmin ? "Admin" : userName ? userName : "Unknown",
                text: text,
                id: Date.now(),
                movieId: current?.id,
            }

            setComments([...comments, newComment])
            commentRef.current.value = ""
        } else {
            commentRef.current.focus()
        }
    }

    const deleteComment = (id, name) => {
        if (isAdmin || name === userName) {
            const updatedComments = comments.filter((comment) => comment.id !== id)
            setComments(updatedComments)
        } else {
            setShowModal(true)
        }
    }

    const editComment = (id, name) => {
        if (isAdmin || name === userName) {
            const comment = comments.find((item) => item.id === id)
            deleteComment(id, name)
            commentRef.current.value = comment.text
            commentRef.current.focus()
        } else {
            setShowModal(true)
        }
    }

    const curentComments = comments.filter((comment) => comment.movieId === current?.id)

    return (
        <div className={ "more_info" }>
            <div className={ "more_info_info" }>
                <div className={ "more_info_image_container" }>
                    <img src={ current?.posterUrl } alt={ current?.name } />
                </div>
                <div className={ "more_info_description" }>
                    <h2 className={ "more_info_name" }>{ current?.title }</h2>
                    <table>
                        <tbody className={ "more_info_details" }>
                        <tr>
                            <td>Original name:</td>
                            <td>{ current?.title }</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>{ current?.year }</td>
                        </tr>
                        <tr>
                            <td>Duration:</td>
                            <td>{ current?.runtime } min</td>
                        </tr>
                        <tr>
                            <td>Genres:</td>
                            <td>
                                { current?.genres.map((genre) => (
                                    <span key={ genre }>{ genre }, </span>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>Director:</td>
                            <td>{ current?.director }</td>
                        </tr>
                        <tr>
                            <td>Casts:</td>
                            <td>{ current?.actors }</td>
                        </tr>
                        </tbody>
                    </table>
                    <p>Description: { current?.plot }</p>
                </div>
            </div>
            <div className={ "comment_block" }>
                <h2 className={ "comment_block_title" }>Leave a comment</h2>
                <div className={ "comment_input_container" }>
          <textarea
              className={ "comment_input" }
              placeholder={ "leave your opinion..." }
              ref={ commentRef }
          ></textarea>
                    <CustomButton
                        text={ "Comment" }
                        className={ "add_comment_button" }
                        onClick={ handleAddComent }
                    />
                </div>

                {curentComments.map((item) => (
                    <div key={ item.id } className={ "comment_container" }>
                        <div className={ "comendator" }>
                            <FaUserAlt />
                            <p>{ item.name }</p>
                        </div>
                        <div className={ "comment_details" }>
                            <p className={ "comment_text" }>{ item.text }</p>
                            <FaTrashAlt
                                onClick={ () => deleteComment(item.id, item.name) }
                                className={ "comment_details_icon" }
                                style={{ color: "red" }}
                            />
                            <FaEdit
                                onClick={ () => editComment(item.id, item.name) }
                                className={ "comment_details_icon" }
                                style={{ color: "yellow" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className={ "similarFilms" }>
                <h2 className={ "list_title" }>You may like</h2>
                <div className={ "recommended_movies" }>
                    <RenderList
                        list={ similarFilms?.slice().sort(() => Math.random() - 0.5).slice(0, 6) }
                    />
                </div>
            </div>
        </div>
    );
};
