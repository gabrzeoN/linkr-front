import { SinglePost, PostAuth, UserPic, UserName, DivIcon, PostInfo, EditMessage, PostMessage, PostLikes, PostMetadata, MetaTitle, MetaDescription, MetaImage, MetaLink, Div } from "./style.jsx";
import UserContext from "../../contexts/UserContext";
import IdentifyHashtag from "../IdentifyHashtag";
import Like from "./../Like/index.jsx";
import PostComment from "../PostComments";
import Comments from "../Comments";

import { useContext, useState, useEffect, useRef } from "react";
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import api from "../../services/api.js";

export default function Post ({ name, image, url, message, metadata, userId, id , getPosts}){
    const { userData } = useContext(UserContext); 
    const [editPost, setEditPost] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [comments, setComments] = useState(false);
    const [totalComments, setTotalComments] = useState(0);
    const [inputValue, setInputValue] = useState(message);
    const previousInputValue = useRef(null);
    const navigate = useNavigate();

    const config = {headers: {Authorization: `Bearer ${userData.token}` }};
    const URL = `${api.BASE_URL}/posts`;

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

    function counterComments() {
        api.commentsCounter(id, userData?.token)
            .then((res) => {
                setTotalComments(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        counterComments()
    }, [])

    function updatePost(inputValue){
        const newPost = { postId: id, userId: userId, newMessage:inputValue }
        const promise = axios.put(URL, newPost, config);
        promise.then((res) => {
            setInputValue(newPost.newMessage);
            setEditPost(false);
            setInputValue(message);
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
                return axios.delete(`${api.BASE_URL}/posts/${postId}`, config )
                        .then(response => 
                            Swal.isLoading())
                        .catch(error => {
                            console.log(error);
                            Swal.showValidationMessage(`Request failed: ${error}`)})
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
                    <UserPic src={image} alt={'user-image'} />
                    <PostLikes>
                        <Like postId={id} userId={userId}></Like> 
                    </PostLikes>
                    <PostComment setComments={setComments} comments={comments} 
                    postId={id} userId={userId} token={userData?.token} 
                    totalComments={totalComments} />
                    
                    {userId === userData.id ? 
                    <DivIcon>
                        <FaPencilAlt onClick={() => setEditPost(!editPost)} color="#ffffff" size={16} />
                        <FaTrashAlt onClick={() => deletePost(id)} color="#ffffff" size={16}/>
                    </DivIcon> : <></>}
                </PostAuth>
            
                <PostInfo>
                    <UserName onClick={() => navigate(`/user/${userId}`)}>
                        {name}
                    </UserName>
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
                    
                    <PostMetadata target="_blank" rel="noreferrer" href={url}>
                        <Div>
                            <MetaTitle>{metadata.title}</MetaTitle>
                            <MetaDescription>{metadata.description}</MetaDescription>
                            <MetaLink>{url}</MetaLink>
                        </Div>
                        <MetaImage src={metadata.image}  alt={'article-image'} />

                    </PostMetadata>
                </PostInfo>
            </SinglePost>
            {
                comments &&
                <Comments postId={id} userId={userId} />
            }
        </>
        
    );
}
