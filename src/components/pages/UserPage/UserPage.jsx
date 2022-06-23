import { Container, LeftWrapper, RightWrapper, TimelineBody, ContainerUserData, Picture, Title, Div, Button, Text} from "../Timeline/style";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./../../Header/index.jsx";
import PostList from "../../PostList";
import Trending from "./../Trending/index.js";
import api from "./../../../services/api.js";
import { useParams } from "react-router-dom";
import Follow from "../../Follow";

export default function UserPage(){
    const { userId } = useParams();
    console.log(userId);
    const [posts, setPosts] = useState ([]);
    const [dataUser, setDataUser] = useState({});
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const config = {headers: {Authorization: `Bearer ${token}`}};

    function getPosts() {
        console.log("passeii");
        const promise = axios.get(`${api.BASE_URL}/users/${userId}`, config);
        setLoading(true);
        promise.then (response => {
            console.log("user", response.data.userData);
            console.log("posts",response.data.posts);
            setLoading(false);
            const { data } = response;
            setPosts([...data.posts]);
            setDataUser(data.userData);
        })
        promise.catch ((error) => {
            console.log(error);
            //alert ('An error occured while trying to fetch the posts, please refresh the page');
        });
    }

    useEffect(() => {
        getPosts();
    }, [userId]);

    return (
        <>
            <Container>
                <LeftWrapper>
                    <TimelineBody>
                        <Header />
                        <ContainerUserData>
                            <Div>
                                <Picture src={dataUser.image}  alt={dataUser.name}/>
                                <Title>{dataUser.name}'s posts</Title>
                            </Div>
                            <Follow userId={userId}></Follow>
                        </ContainerUserData>
                        {posts?.length === 0 ? 
                        <Text>{dataUser.name} has no posts yet...</Text> 
                        : 
                        <PostList posts={posts} getPosts={getPosts} loading={loading} />}
                    </TimelineBody>
                </LeftWrapper>
                <RightWrapper>
                    <Trending />
                </RightWrapper>
            </Container>
        </>
    );
}