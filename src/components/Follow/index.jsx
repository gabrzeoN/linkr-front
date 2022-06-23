import axios from "axios";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";

import api from "../../services/api";
import UserContext from "../../contexts/UserContext";
import { FollowContent, UnfollowContent } from "./style.js";

export default function Follow({userId}){
    const followUnfollowURL = `${api.BASE_URL}/followers/${userId}`;
    const checkFollowStatusURL = `${api.BASE_URL}/followers/${userId}`;
    const {userData} = useContext(UserContext);
    const {token} = userData;
    const [follow, setFollow] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    async function checkFollowStatus(){
        try{
            const {data} = await axios.get(checkFollowStatusURL, config);
            const { followedByMe } = data;
            setFollow(followedByMe);
        }catch(error){
            Swal.fire({icon: 'error', title: 'Oops...', text: error.response.data});
        }
        return;
    }

    async function followUnfollow(){
        setDisabled(true);
        try{
            const {data} = await axios.post(followUnfollowURL, {}, config);
            const { followedByMe } = data;
            setFollow(followedByMe);
        }catch(error){
            Swal.fire({icon: 'error', title: 'Oops...', text: error.response.data});
        }
        setDisabled(false);
        return;
    }

    useEffect(() => {
        checkFollowStatus();
    }, []);

    return(
        <>
            {follow ?
                    <FollowContent onClick={() => followUnfollow()} disabled={disabled}>
                        <p>Follow</p>
                    </FollowContent>
                :
                    <UnfollowContent onClick={() => followUnfollow()} disabled={disabled}>
                        <p>Unfollow</p>
                    </UnfollowContent>

            }
        </>
    );
}