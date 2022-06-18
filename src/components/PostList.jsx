import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import Post from "./Post";

export default function PostList () {
    const [posts, setPosts] = useState ([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    };

    function getPosts() {
        const promise = axios.get('http://localhost:5000/timeline', config);
        promise.then (response => {
            setLoading(false);
            const { data } = response;
            setPosts(data);
        })
        promise.catch (() => {
            alert ('An error occured while trying to fetch the posts, please refresh the page');
            /* navigate('/timeline');  */
        });
    }

    useEffect(() => {
        getPosts();
    }, [token]);

    function showPosts () {   
        if (posts.length > 0) {
            return posts.map((post, i)=> {
                const { userId, name, image,id , url, metadata, message } = post;
                return (
                    <>
                        <Post  key={i} userId={userId} name={name} image={image} id={id} url={url} 
                                metadata={metadata} message={message} 
                        />
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
            {loading ? <Loading>Loading...</Loading> : <List>{showPosts()}</List>}
        </TimelinePosts>
    );
}

const NoPosts = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 18px;
    color: white;
`;

const TimelinePosts = styled.div`
    display: flex;
    flex-direction: column;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Loading = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 18px;
    color: white;
`;