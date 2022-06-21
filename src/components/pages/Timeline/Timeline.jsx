import Header from "../../Header/index.jsx";
import { TimelineBody, TimelineName} from "./style.jsx";
import PublishCard from "./../PublishCard/PublishCard.jsx";
import PostList from "./../../PostList.jsx";
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
        const promise = axios.get('https://linkr-mggg.herokuapp.com/timeline', config);
        setLoading(true);
        promise.then (response => {
            setLoading(false);
            console.log(response);
            const { data } = response;
            if(typeof data === String){
                setPosts([...data]);
            }else {
                setPosts(data);
            }
            
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
            <Header />
            <TimelineBody> 
                <TimelineName>timeline</TimelineName>
                <PublishCard getPosts={getPosts}/>
                <PostList posts={posts} getPosts={getPosts} loading={loading}/>
            </TimelineBody>
        </>
    );
}