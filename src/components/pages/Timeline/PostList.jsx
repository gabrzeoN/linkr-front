import Post from "./Post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";
import Loading from "../../../assets/Loading";

export default function PostList () {

    const [posts, setPosts] = useState ([]);
    const [loading, setLoading] = useState(false);
    /* const { token } = localStorage; */

    const navigate = useNavigate();

    /* const config = {
        headers: {

            Authorization: `Bearer ${token}` 
        
        }
    }; */

    function getPosts () {

        const promise = axios.get('https://localhost:5000/timeline'/* , config */);

        promise.then (response => {
            setLoading(false);
            const { data } = response;
            setPosts(data);
        })
        promise.catch (e => {
            alert ('Algo deu errado. Vamos tentar de novo.  ╭( ･ㅂ･)و');
            navigate('/timeline'); 
        });

    }

    useEffect(() => {
        getPosts();
    }, []);

    function showPosts () {
        if (posts.length > 0) {
            return posts.map(post => {
                const { userImage, userName, description, url } = post;
                return (

                    <>
                        <Post userImage={userImage} userName={userName} description={description} url={url} />
                    </>

                );
            });
        } else {
            return (

                <NoPosts>There are no posts yet</NoPosts>

            );
        }
    }

    return (

        <TimelinePosts>
            <Header />
            {loading ? <List Loading={true}><CenterLoader><Loading height={35} width={43} /></CenterLoader></List>
             : 
             <List>{showPosts}</List>}
        </TimelinePosts>

    );

}

const NoPosts = styled.div`

    font-weight: bold;
    font-size: 15px;

`;

const TimelinePosts = styled.div`

    display: flex;
    flex-direction: column;

`;

const List = styled.div`

    display: flex;
    flex-direction: column;

`;

const CenterLoader = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;

`;