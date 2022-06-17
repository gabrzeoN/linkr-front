import axios from "axios";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";

import UserContext from "../../contexts/UserContext";
import { LikedContent, NotLikedContent } from "./style";

export default function Like({postId}){
    const postLikeURL = `http://localhost:5000/likes/${postId}`;
    const getLikeURL = `http://localhost:5000/likes/${postId}`;
    const {token} = useContext(UserContext);
    const [liked, setLiked] = useState(null);
    const [likesCount, setLikesCount] = useState(null);
    const config = {
        headers: {
            // authorization: `Bearer ${token}`
            authorization: `Bearer ad0bccab-5aa3-4e09-8caa-e85f12958644` // TODO: erase me user1 Gabriel
            // authorization: `Bearer e96e614d-2bf7-45a6-bdcc-244e5a13f741` // TODO: erase me user2 Jao
            // authorization: `Bearer cbebbf58-c33f-4e6b-9754-bac82a2c168d` // TODO: erase me user3
            
        }
    }

    async function checkLikeStatus(){
        try{
            const {data} = await axios.get(getLikeURL, config);
            const { likesAmount, likedByMe } = data;
            setLiked(likedByMe);
            setLikesCount(likesAmount);
            console.log(`postId: ${postId} likesAmount: ${likesAmount}`);
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data
            })
        }
        return;
    }

    
    async function likeDislike(){
        try{
            const {data} = await axios.post(postLikeURL, {}, config);
            const { likesAmount, likedByMe } = data;
            setLiked(likedByMe);
            setLikesCount(likesAmount);
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
    
    useEffect(() => {
        checkLikeStatus();
    }, []);

    return(
        <>
            {liked ?
                <LikedContent onClick={() => likeDislike()}>
                    <ion-icon name="heart"></ion-icon>
                    <p>{likesCount ? `${likesCount} likes` : `0 likes`}</p>
                </LikedContent>
                :
                <NotLikedContent onClick={() => likeDislike()}>
                    <ion-icon name="heart-outline"></ion-icon>
                    <p>{likesCount ? `${likesCount} likes` : `0 likes`}</p>
                </NotLikedContent>
            }
        </>
    );
}