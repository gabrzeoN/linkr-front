import { Container, LeftWrapper, RightWrapper, TimelineBody, TimelineName  } from "./style.jsx";
import PublishCard from "./../PublishCard/PublishCard.jsx";
import Header from "../../Header/index.jsx";
import Trending from "../Trending/index.js"
import PostList from "./../../PostList.jsx";
import { useState, useEffect } from "react";
import api from "./../../../services/api.js";
import axios from "axios";

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    function getPosts() {
        const promise = axios.get(`${api.BASE_URL}/posts`, config);
        setLoading(true);
        promise.then(response => {
            setLoading(false);
            setPosts(response.data);
        })
        promise.catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getPosts();
    }, []);
    
    return (
        <>
            <Container>
                <LeftWrapper>
                    <TimelineBody>
                        <Header />
                        <TimelineName>timeline</TimelineName>
                        <PublishCard getPosts={getPosts} />
                        <PostList posts={posts} getPosts={getPosts} loading={loading} />
                    </TimelineBody>
                </LeftWrapper>
                <RightWrapper>
                    <Trending />
                </RightWrapper>
            </Container>
        </>
    );
}

