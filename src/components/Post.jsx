import { useContext, useState, useEffect, useRef } from "react";
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Post ({ name, image, url, message, metadata, userId, id }) {
    const {userData} = useContext(UserContext);
    const [editPost, setEditPost] = useState(false);

    const [inputValue, setInputValue] = useState(message);
    const previousInputValue = useRef(null);

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    function updateMessage(e){
        if(e.keyCode ===  13){
            e.preventDefault();
            updatePost(inputValue);
            //console.log("com enter",inputValue);
        } else if(e.keyCode === 27){
            e.preventDefault();
            setInputValue(message);
            setEditPost(false);
        }        
    }

    function updatePost(inputValue){
        const newPost = {
            postId: id,
            userId: userId,
            newMessage:inputValue
        }
        console.log("new post", newPost);

    }


        
    return (

        <SinglePost>
            <PostAuth>
                <UserPic src={image} height={50} width={50} alt={'user-image'} />
                <UserName>{name}</UserName>
                {userId === userData.id ? 
                <DivIcon>
                    <FaPencilAlt onClick={() => setEditPost(true)} color="#ffffff" size={16} />
                    <FaTrashAlt color="#ffffff" size={16}/>
                </DivIcon> : <></>}
            </PostAuth>
            <PostInfo>
                {editPost ? 
                    <EditMessage ref={previousInputValue}
                            type="text" 
                            value={inputValue} 
                            onChange={e => setInputValue(e.target.value)}
                            onKeyDown={(e) => updateMessage(e)}
                            />
                
                :
                <PostMessage>{message}</PostMessage>}
                <PostLikes></PostLikes>
                <PostMetadata target="_blank" rel="noreferrer" href={url}>
                    <MetaTitle>{metadata.title}</MetaTitle>
                    <MetaDescription>{metadata.description}</MetaDescription>
                    <MetaLink>{url}</MetaLink>
                    <MetaImage src={metadata.image} height={155} width={155} alt={'article-image'} />
                </PostMetadata>
            </PostInfo>
        </SinglePost>
        
    );
}

const SinglePost = styled.div`
    height: 276px;
    width: 611px;

    margin-top: 29px;

    display: flex;
    flex-direction: column;

    background-color: #171717;
    border-radius: 16px;

    position: relative;

`;

const PostAuth = styled.div`
    height: 55px;

    margin-top: 16px;

    display: flex;
`;

const DivIcon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    gap: 12px;

    position: absolute;
    top:22px;
    right: 21px;
`;

const UserPic = styled.img`

    width: 50px;
    height: 50px;

    margin-left: 18px;

    border-radius: 26.5px;

`;

const UserName = styled.div`

    width: 502px;
    height: 23px;

    margin-top: 5px;
    margin-left: 18px;

    color: white;

`;

const PostInfo = styled.div`

    display: flex;
    flex-direction: column;
    gap:5px;
`;

const EditMessage = styled.input`
    width: 503px;
    height: 44px;

    border-radius:7px;
    border:none;
    background-color:#ffffff;
    margin-top: -15px;
    margin-left: 86px;
`;

const PostMessage = styled.div`
    width: 502px;
    height: 45px;

    margin-top: -15px;
    margin-left: 86px;

    color: white;

`;

const PostLikes = styled.div`

    position: absolute;    

    width: 40px;
    height: 55px;

    margin-top: 15px;
    margin-left: 25px;

    background-color: white;

`;

const PostMetadata = styled.a`

    position: relative;

    width: 503px;
    height: 155px;

    margin-left: 86px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    color: white;

`;

const MetaTitle = styled.div`

    position: absolute;

    margin-top: 10px;
    margin-left: 10px;

    width: 328px;
    font-size: 16px;
    font-weight: bold;
    color: #CECECE;

`;

const MetaDescription = styled.div`

    position: absolute;

    margin-top: 55px;
    margin-left: 10px;

    width: 328px;
    font-size: 13px;
    color: #9B9595;

`;

const MetaLink = styled.div`
    
    margin-top: 120px;
    margin-left: 10px;
    
    width: 328px;
    font-size: 10px;
    color: #CECECE;

    a{
        text-decoration: none;
    }
    
    a:visited{
        text-decoration: none;
        color: #CECECE;
    }

`;

const MetaImage = styled.img`

    position: absolute;

    right: 0;
    top: 0;

    width: 155px;
    height: 153px;

    border-left: 1px solid #303030;
    border-radius: 0px 11px 11px 0px;

`;
