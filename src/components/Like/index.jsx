import axios from "axios";
import Swal from "sweetalert2";
import ReactTooltip from 'react-tooltip';

import { useState, useContext, useEffect } from "react";

import UserContext from "../../contexts/UserContext";
import { LikedContent, NotLikedContent } from "./style";

export default function Like({postId}){
    const postLikeURL = `http://localhost:5000/likes/${postId}`;
    const getLikeURL = `http://localhost:5000/likes/${postId}`;
    const {userData} = useContext(UserContext);
    const {token} = userData;
    const [liked, setLiked] = useState(null);
    const [likesCount, setLikesCount] = useState(null);
    const [tooltipMessage, setTooltipMessage] = useState("");
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    async function checkLikeStatus(){
        try{
            const {data} = await axios.get(getLikeURL, config);
            const { likesAmount, likedByMe, allLikesName } = data;
            changeLikeStates(likedByMe, likesAmount, allLikesName);
        }catch(error){
            Swal.fire({icon: 'error', title: 'Oops...', text: error.response.data});
        }
        return;
    }

    async function likeDislike(){
        try{
            const {data} = await axios.post(postLikeURL, {}, config);
            const { likesAmount, likedByMe, allLikesName } = data;
            changeLikeStates(likedByMe, likesAmount, allLikesName);
        }catch(error){
            Swal.fire({icon: 'error', title: 'Oops...', text: error.response.data});
        }
        return;
    }
    
    function changeLikeStates(likedByMe, likesAmount, allLikesName){
        setLiked(likedByMe);
        setLikesCount(likesAmount);
        changeTooltipText(likedByMe, likesAmount, allLikesName);
    }

    function changeTooltipText(likedByMe, likesAmount, allLikesName){     
        let text = "";
        if(likedByMe){
            if(allLikesName.length >= 3){
                text = `You, ${allLikesName[0]} and ${likesAmount - 2} others`;
            }else if(allLikesName.length === 2){
                text = `You, ${allLikesName[0]} and 1 other`;
            }else if(allLikesName.length === 1){
                text = `You and ${allLikesName[0]}`;
            }else if(allLikesName.length === 0){
                text = `You`;
            } 
        }else{
            if(allLikesName.length >= 4){
                text = `${allLikesName[0]}, ${allLikesName[1]} and ${likesAmount - 2} others`;
            }else if(allLikesName.length === 3){
                text = `${allLikesName[0]}, ${allLikesName[1]} and 1 other`;
            }else if(allLikesName.length === 2){
                text = `${allLikesName[0]} and ${allLikesName[1]}`;
            }else if(allLikesName.length === 1){
                text = `${allLikesName[0]}`;
            }else if(allLikesName.length === 0){
                text = `No likes yet`;
            }
        }
        return setTooltipMessage(text);
    }

    useEffect(() => {
        checkLikeStatus();
    }, []);

    return(
        <>
            {liked ?
                    <LikedContent onClick={() => likeDislike()} data-tip={tooltipMessage} data-for={"peopleWhoLiked"}>
                        <ion-icon name="heart"></ion-icon>
                        <p>{likesCount ? `${likesCount} likes` : `0 likes`}</p>
                        <ReactTooltip id={"peopleWhoLiked"} place={"bottom"} type={"light"} effect={"solid"}/>
                    </LikedContent>
                :
                    <NotLikedContent onClick={() => likeDislike()} data-tip={tooltipMessage} data-for={"peopleWhoLiked"}>
                        <ion-icon name="heart-outline"></ion-icon>
                        <p>{likesCount ? `${likesCount} likes` : `0 likes`}</p>
                        <ReactTooltip id={"peopleWhoLiked"} place={"bottom"} type={"light"} effect={"solid"}/>
                    </NotLikedContent>

            }
        </>
    );
}