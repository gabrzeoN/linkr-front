import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Like from "./Like";
import Swal from "sweetalert2";
import axios from "axios";
import IdentifyHashtag from "./IdentifyHashtag";

export default function Post ({ name, image, url, message, metadata, userId, id , getPosts}){
    const {userData, user, setUser} = useContext(UserContext); 
    const [editPost, setEditPost] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [inputValue, setInputValue] = useState(message);
    const previousInputValue = useRef(null);
    const navigate = useNavigate();

    const config = {headers: {Authorization: `Bearer ${userData.token}` }};
    const URL = "https://linkr-mggg.herokuapp.com/";

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    function updateMessage(e){
        if(e.keyCode ===  13){
            e.preventDefault();
            setDisabled(true);
            updatePost(inputValue);
        } else if(e.keyCode === 27){
            e.preventDefault();
            setInputValue(message);
            setEditPost(false);
        }        
    }

    function updatePost(inputValue){
        const newPost = { postId: id, userId: userId, newMessage:inputValue }
        const promise = axios.put(URL, newPost, config);
        promise.then((res) => {
            setInputValue(newPost.newMessage);
            setEditPost(false);
            getPosts();            
        });
        promise.catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Não foi possível salvar as alterações!"
            })
            setDisabled(false);
        });
    }

    function deletePost(id){
        const postId = id;
        Swal.fire({
            title: 'Are you sure you want to delete this post?',
            color: '#ffffff',
            background: '#333333',
            confirmButtonColor: '#1877F2',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            showCancelButton: true,
            cancelButtonText: 'No, go back!',
            reverseButtons: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return axios.delete(`https://linkr-mggg.herokuapp.com/${postId}`, config )
                        .then(response => 
                            Swal.isLoading())
                        .catch(error => {Swal.showValidationMessage(`Request failed: ${error}`)})
            },
            allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title:'Deleted!', 
                        text:'Your post has been deleted.',
                        icon:'success', 
                        background:'#333333',
                        color:'#fff'
                    });
                    getPosts();
                }})
    }
    
    return (
        <>
            <SinglePost>
                <PostAuth>
                    <UserPic src={image} height={50} width={50} alt={'user-image'} />
                    <UserName onClick={() => {setUser({...user, id:userId});
                        navigate(`/user/${userId}`)}}
                        >
                        {name}
                    </UserName>
                    {userId === userData.id ? 
                    <DivIcon>
                        <FaPencilAlt onClick={() => setEditPost(!editPost)} color="#ffffff" size={16} />
                        <FaTrashAlt onClick={() => deletePost(id)} color="#ffffff" size={16}/>
                    </DivIcon> : <></>}
                </PostAuth>
                <PostInfo>
                    {editPost ? 
                        <EditMessage autoFocus ref={previousInputValue}
                                type="text" 
                                value={inputValue} 
                                onChange={e => setInputValue(e.target.value)}
                                onKeyDown={(e) => updateMessage(e)}
                                disabled={disabled}
                        />
                    :
                        <PostMessage>
                            <IdentifyHashtag>{message}</IdentifyHashtag>
                        </PostMessage>
                    }
                    <PostLikes>
                        <Like postId={id} userId={userId}></Like>
                    </PostLikes>
                    <PostMetadata target="_blank" rel="noreferrer" href={url}>
                        <MetaTitle>{metadata.title}</MetaTitle>
                        <MetaDescription>{metadata.description}</MetaDescription>
                        <MetaLink>{url}</MetaLink>
                        <MetaImage src={metadata.image} height={155} width={155} alt={'article-image'} />
                    </PostMetadata>
                </PostInfo>
            </SinglePost>
        </>
        
    );
}

const SinglePost = styled.div`
    height: 232px;
    width: 100%;

    margin-top: 29px;

    display: flex;
    flex-direction: column;

    background-color: #171717;

    position: relative;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;

    @media only screen and (min-width: 600px) {
        width: 611px;
        height: 276px;

        border-radius: 16px;
    }

`;

const PostAuth = styled.div`
    height: 55px;

    margin-top: 16px;
    display: flex;

    color: #FFFFFF;

    @media only screen and (min-width: 600px) {
        height: 55px;

        margin-top: 16px;

        display: flex;
    }

`;

const DivIcon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    gap: 12px;

    position: absolute;
    top:22px;
    right: 218px;

    @media only screen and (min-width: 600px) {
        display:flex;
        justify-content: center;
        align-items: center;

        gap: 12px;

        position: absolute;
        top:22px;
        right: 21px;
    }

`;

const UserPic = styled.img`

    width: 40px;
    height: 40px;

    margin-left: 211px;

    border-radius: 26.5px;

    @media only screen and (min-width: 600px) {
        width: 50px;
        height: 50px;

        margin-left: 18px;

        border-radius: 26.5px;
    }

`;

const UserName = styled.div`

    margin-top: 5px;
    margin-left: 15px;

    color: white;

    cursor: pointer;

    font-size: 17px;

    @media only screen and (min-width: 600px) {
        width: fit-content;
        height: 23px;

        font-size: 19px;
    }

`;

const PostInfo = styled.div`

    display: flex;
    flex-direction: column;
    gap:5px;
    
`;

const EditMessage = styled.input`
    width: 503px;
    height: 44px;
    margin-bottom: 10px;
    
    border-radius:7px;
    border:none;
    background-color:#ffffff;
    margin-top: -20px;
    margin-left: 86px;

    @media only screen and (max-width: 600px) {
        width: 278px;
        height: 39px;
        margin-bottom: 10px;
        margin-top: -20px;
        margin-left: 265px;

        z-index: 1;
    }

`;

const PostMessage = styled.div`
    width: 275px;
    height: 45px;

    margin-right: 220px;
    
    margin-top: -15px;
    margin-left: 266px;

    color: #B7B7B7;

    @media only screen and (min-width: 600px) {
        width: 502px;
        height: 45px;
        
        margin-top: -15px;
        margin-left: 86px;

        color: #B7B7B7;
    }

`;

const PostLikes = styled.div`
    position: absolute;    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 55px;
    margin-top: 20px;
    margin-left: 201px;

    @media only screen and (min-width: 600px) {
        position: absolute;    
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 55px;
        margin-top: 20px;
        margin-left: 15px;
    }
`;

const PostMetadata = styled.a`

    position: relative;

    width: 278px;
    height: 125px;

    margin-left: 265px;
    margin-top: -9px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    color: white;
    
    @media only screen and (min-width: 600px) {
        position: relative;

        width: 503px;
        height: 155px;

        margin-left: 86px;

        border: 1px solid #4D4D4D;
        border-radius: 11px;

        color: white;
    }

`;

const MetaTitle = styled.div`

    position: absolute;

    margin-top: 10px;
    margin-left: 10px;

    width: 170px;
    height: 36px; 
    font-size: 11px;
    font-weight: bold;
    color: #CECECE;

    overflow: hidden;

    @media only screen and (min-width: 600px) {
        position: absolute;

        margin-top: 10px;
        margin-left: 10px;

        width: 328px;
        height: 45px;
        font-size: 16px;
        font-weight: bold;
        color: #CECECE;

        overflow: hidden;
    }

`;

const MetaDescription = styled.div`

    position: absolute;

    margin-top: 45px;
    margin-left: 10px;

    width: 165px;
    height: 54px; 
    font-size: 9px;
    color: #9B9595;
    overflow: hidden;

    @media only screen and (min-width: 600px) {
        position: absolute;

        margin-top: 55px;
        margin-left: 10px;

        width: 328px;
        height: 66px;
        font-size: 13px;
        color: #9B9595;

        overflow: hidden;
    }

`;

const MetaLink = styled.div`
    
    margin-top: 100px;
    margin-left: 10px;
    
    width: 145px;
    height: 19px;
    font-size: 9px;
    color: #CECECE;

    a{
        text-decoration: none;
    }
    
    a:visited{
        text-decoration: none;
        color: #CECECE;
    }

    overflow: hidden;

    @media only screen and (min-width: 600px) {
        margin-top: 122px;
        margin-left: 10px;
        
        width: 328px;
        height: 30px;
        font-size: 10px;
        color: #CECECE;

        a{
            text-decoration: none;
        }
        
        a:visited{
            text-decoration: none;
            color: #CECECE;
        }

        overflow: hidden;
    }

`;

const MetaImage = styled.img`

    position: absolute;

    right: 0;
    top: 0;

    width: 100px;
    height: 122px;

    border-left: 1px solid #303030;
    border-radius: 0px 11px 11px 0px;

    @media only screen and (min-width: 600px) {
        position: absolute;

        right: 0;
        top: 0;

        width: 155px;
        height: 153px;

        border-left: 1px solid #303030;
        border-radius: 0px 11px 11px 0px;
    }

`;
