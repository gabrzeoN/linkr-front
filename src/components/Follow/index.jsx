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
        try{
            const {data} = await axios.post(followUnfollowURL, {}, config);
            const { followedByMe } = data;
            setFollow(followedByMe);
        }catch(error){
            Swal.fire({icon: 'error', title: 'Oops...', text: error.response.data});
        }
        return;
    }

    useEffect(() => {
        checkFollowStatus();
    }, []);

    return(
        <>
            {follow ?
                    <FollowContent onClick={() => followUnfollow()}>
                        <p>Follow</p>
                    </FollowContent>
                :
                    <UnfollowContent onClick={() => followUnfollow()}>
                        <p>Unfollow</p>
                    </UnfollowContent>

            }
        </>
    );
}