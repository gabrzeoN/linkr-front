import { IoIosSend } from "react-icons/io"
import {
    User,
    SeparateMessages,
    CommentContent,
    Comment,
    CommentsContent,
    InputComment,
    InputCommentContent
} from "./style"
import { useState, useEffect, useContext} from "react"
import api from "../../services/api"
import UserContext from "../../contexts/UserContext.jsx"
import Loading from "../../assets/Loading"
import HeaderComment from "../HeaderComment"

function Comments({ postId, userId }) {
    const { userData } = useContext(UserContext)
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handlePostComment() {
        api.createComment(userData?.token, text, postId, userId).then(() => {
            setText("")
            getComments();
        }).catch((error) => {
            console.log(error)
        })
    }

    function getComments() {
        setIsLoading(true)
        api.getComments(userData?.token, postId).then((res) => {
            setComments(res.data);
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <CommentsContent>
            {isLoading ?
                <Loading />
                :
                comments?.map((comment) =>
                    <Comment key={comment.id}>
                        <CommentContent>
                            <img src={comment.image} />
                            <SeparateMessages>
                                <HeaderComment comment={comment} />
                                <div className="coment">{comment.text}</div>
                            </SeparateMessages>
                        </CommentContent>
                    </Comment>
                )
            }
            <InputCommentContent>
                <img src={userData?.image} />
                <InputComment
                    id="userComment"
                    name="userComment"
                    placeholder="write a comment..."
                    type="text"
                    onChange={handleInputChange}
                />
                <button id="commentButton" className="ioioSend" onClick={handlePostComment} ><IoIosSend size="20px" /></button>
            </InputCommentContent>
        </CommentsContent>
    )
}

export default Comments;