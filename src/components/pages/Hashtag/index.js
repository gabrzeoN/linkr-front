import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, LeftWrapper, RightWrapper, TimelineBody, TitleContainer } from "./style.js";
import Loading from "../../../assets/Loading.js";
import Header from "../../Header/index.jsx";
import Trending from "../Trending/index.js"
import PostList from "../../PostList.jsx"

export default function TagPage() {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { hashtag } = useParams();

  function getTagPosts() {
    const promise = axios.get(`https://linkr-mggg.herokuapp.com/hashtag/${hashtag}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setLoading(true);
    promise.then(res => {
      setLoading(false);
      console.log(res);
      const { data } = res;
      setPosts([...data]);
    })
    promise.catch((err) => {
      alert('An error occured while trying to fetch the posts, please refresh the page');
      console.log(err);
    })
  }

  useEffect(() => {
    getTagPosts();
  }, []);

  return (
    <>
      <Container>
        <LeftWrapper>
          <TimelineBody>
            <Header />
            <TitleContainer>
              # {hashtag}
            </TitleContainer>
            <PostList posts={posts} getPosts={getTagPosts} loading={loading} />
          </TimelineBody>
        </LeftWrapper>
        <RightWrapper>
          <Trending />
        </RightWrapper>
      </Container>
    </>
  );
}

