import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../../Header/index.jsx";
import PublishCard from "./../../PublishCard/index.js";
import PostList from "./../../PostList.jsx";
import { TimelineBody } from "./style.js";

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
        <TimelineBody>
            <Header />
            <TimelineName />
            <PublishCard getPosts={getPosts}/>
            <PostList posts={posts} getPosts={getPosts} loading={loading}/>
        </TimelineBody>
    );
}