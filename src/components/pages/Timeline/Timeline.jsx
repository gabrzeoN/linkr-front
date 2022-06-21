import Header from "../../Header/index.jsx";
import Trending from "../Trending/index.js"
import PublishCard from "./../PublishCard/PublishCard.jsx";
import PostList from "./../../PostList.jsx";
import TimelineName from "./../../TimelineName.jsx";

import styled from "styled-components";
import { useState, useEffect } from "react";
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
        const promise = axios.get('https://linkr-mggg.herokuapp.com/timeline', config);
        setLoading(true);
        promise.then(response => {
            setLoading(false);
            console.log(response);
            const { data } = response;
            if (typeof data === String) {
                setPosts([...data]);
            } else {
                setPosts(data);
            }

        })
        promise.catch(() => {
            alert('An error occured while trying to fetch the posts, please refresh the page');
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
                        <TimelineName />
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
const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin-top: 72px;
    background-color: #333333;
`;

const LeftWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #333333;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const RightWrapper = styled.div`
    width: 40%;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #333333;

    @media (max-width: 767px) {
        display: none;
    }
`;

const TimelineBody = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 100px;

    @media (max-width: 610px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        width: 100%;
        align-items: center;
    }
`;