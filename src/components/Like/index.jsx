import axios from "axios";
import Swal from "sweetalert2";
import { useState, useContext } from "react";

import UserContext from "../../contexts/UserContext";
import { LikedContent, NotLikedContent } from "./style";

export default function Like({postId}){
    const postLikeURL = `http://localhost:5000/likes/${postId}`;
    const {token} = useContext(UserContext);
    const [liked, setLiked] = useState(false);
    
    const config = {
        headers: {
            // authorization: `Bearer ${token}`
            authorization: `Bearer ad0bccab-5aa3-4e09-8caa-e85f12958644` // TODO: erase me
        }
    }

    async function likeDislike(){
        try{
            const {data} = await axios.post(postLikeURL, {}, config);
            setLiked(liked ? false : true);
            console.log(`postId: ${postId}`, data); // TODO: erase me
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data
            })
        }
        return;
    }

    return(
        <>
            {liked ?
                <LikedContent onClick={() => likeDislike()}>
                    <ion-icon name="heart"></ion-icon>
                </LikedContent>
                :
                <NotLikedContent onClick={() => likeDislike()}>
                    <ion-icon name="heart-outline"></ion-icon>
                </NotLikedContent>
            }
        </>
    );
}