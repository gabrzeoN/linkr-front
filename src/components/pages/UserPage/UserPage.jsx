import { UserTimeline, ContainerUserData, Picture, Title } from "./style";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../../Header";
import PostList from "../../PostList";
import UserContext from "../../../contexts/UserContext";

export default function UserPage(){
    const {user, setUser} = useContext(UserContext);
    const [posts, setPosts] = useState ([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const config = {headers: {Authorization: `Bearer ${token}`}};

    function getUserPosts() {
        const promise = axios.get(`http://localhost:5000/users/${user.id}`, config);
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
        getUserPosts();
    }, []);

    return (
        <>
            <Header/>
            <UserTimeline>
                <ContainerUserData>
                    <Picture src=""  alt=""/>
                    <Title>Juvenal's posts</Title>
                </ContainerUserData>
                <PostList posts={posts} getUserPosts={getUserPosts} loading={loading}/>
            </UserTimeline>
        </>
    );
}