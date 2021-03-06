import axios from "axios";
import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import UserContext from "../../contexts/UserContext";
import { HeaderContent, Options, OptionsBar, Logout, HideOptions } from "./style";
import api from "../../services/api";

export default function Header(){
    const patchLogoutURL = ` ${api.BASE_URL}/sign-out`;
    const {userData} = useContext(UserContext);
    //const {image, token} = userData;

    const [arrow, setArrow] = useState("down")
    const [optionsBar, setOptionsBar] = useState(false);
    const navigate = useNavigate();

    const config = {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }

    function openCloseOptionsBar(){
        setArrow(arrow === "down" ? "up" : "down");
        setOptionsBar(optionsBar ? false : true);
    }

    async function logout(){
        setArrow("down");
        setOptionsBar(false);
        try{
            await axios.patch(patchLogoutURL, {}, config);
            navigate("/");
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
        <HeaderContent>
            <h1>linkr</h1>
            <SearchBar />
            <Options onClick={() => openCloseOptionsBar()}>
                <ion-icon name={`chevron-${arrow}-outline`}></ion-icon>
                <img src={userData.image} alt={userData.name}></img>
            </Options>
            <OptionsBar optionsBar={optionsBar}>
                <Logout onClick={() => logout()}>Logout</Logout>
            </OptionsBar>
            <HideOptions onClick={() => openCloseOptionsBar()} optionsBar={optionsBar}></HideOptions>
        </HeaderContent>
    );
}