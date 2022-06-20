import Header from "../../Header/index.jsx";
import PublishCard from "./../PublishCard/PublishCard.jsx";
import PostList from "./../../PostList.jsx";
import TimelineName from "./../../TimelineName.jsx";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Timeline(){
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
        setLoading(true);
        promise.then (response => {
            setLoading(false);
            const { data } = response;
            setPosts(data);
        })
        promise.catch (() => {
            alert ('An error occured while trying to fetch the posts, please refresh the page');
        });
    }

    useEffect(() => {
        getPosts();
    }, []);
    return (
        <>
            <TimelineBody>
                <Header />
                <TimelineName />
                <PublishCard getPosts={getPosts}/>
                <PostList posts={posts} getPosts={getPosts} loading={loading}/>
            </TimelineBody>
        </>
    );
}

const TimelineBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* @media only screen and (min-width: 600px) {
        width: 611px;
        height: 209px;
        border-radius: 16px;
        
        padding: 16px 20px 16px 20px; 
        justify-content: space-between;
        align-items: flex-start;
    }  */
`;