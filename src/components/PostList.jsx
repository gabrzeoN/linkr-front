import styled from "styled-components";
import Header from "./Header";
import Post from "./Post/Post";

export default function PostList ({posts, getPosts, loading}) {
    function showPosts () {  
        if(posts[0] === "You don't follow anyone yet"){
           return  <NoPosts>You don't follow anyone yet. Search for new friends!</NoPosts>
        } 
        else if (posts?.length !== 0) {
            return posts?.map((post, i)=> {
                const { userId, name, image, id , url, metadata, message } = post;
                
                return (
                    <>
                        <Post  key={i} userId={userId} name={name} image={image} id={id} url={url} 
                                metadata={metadata} message={message} getPosts={getPosts}
                        />
                    </>
                );
            });
        } else {
            return (
                <NoPosts>No posts found from your friends</NoPosts>
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