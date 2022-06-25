import { useState, useEffect, useContext} from "react"
import UserContext from "../../contexts/UserContext.jsx"
import {
    User
} from "./style"
import api from "../../services/api.js";

export default function HeaderComment({ comment }) {
    const { userData } = useContext(UserContext);
    const [followedId, setFollowedId] = useState(false);
    const [isMe, setIsMe]= useState(false);
    
    function verifyFollow() {
        api.getFollowStatus(comment.userId, userData?.token).then((res) => {
            setFollowedId(res.data.followedByMe)
            setIsMe(res.data.isMe)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        verifyFollow()
    }, [])

    return (
        <User>
            <div className="username">{comment.username}</div>
            <div className="follow">
                {isMe === true ?
                    ""
                    : followedId === true ?
                    "• post's author"
                    : "• following"
                }
            </div>
        </User>
    )
}