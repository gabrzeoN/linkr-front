import { Container, LeftWrapper, RightWrapper, TimelineBody, ContainerUserData, Picture, Title, Div, Button} from "../Timeline/style";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../../Header";
import PostList from "../../PostList";
import Trending from "./../Trending";
import UserContext from "../../../contexts/UserContext";
import api from "./../../../services/api.js";

export default function UserPage(){
    const {user, setUser} = useContext(UserContext);
    const [posts, setPosts] = useState ([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const config = {headers: {Authorization: `Bearer ${token}`}};

    function getPosts() {
        const promise = axios.get(`${api.BASE_URL}/users/${user.id}`, config);
        setLoading(true);
        promise.then (response => {
            console.log(response.data)
            setLoading(false);
            const { data } = response;
            setPosts(data);
            setUser({...user, data:[...data]})
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
            <Container>
                <LeftWrapper>
                    <TimelineBody>
                        <Header />
                        <ContainerUserData>
                            <Div>
                                <Picture src={user.image}  alt={user.name}/>
                                <Title>{user.name}'s posts</Title>
                            </Div>
                            <Button id={user.id}>Follow</Button>
                        </ContainerUserData>
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