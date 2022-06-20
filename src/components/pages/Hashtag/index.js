import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Main, Topo, Container, Posts, Loading } from "./style";
import Trending from "../Trending";
// import Post from "./../Post.js; TODO: importar os posts aqui (não importar o publish);

export default function TagPage() {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const { hashtag } = useParams();

  useEffect(() => {
    (async () => {
      try {
        axios
          .get(`localhost:5000/hashtag/${hashtag}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
          .then((response) => {
            const { data } = response;
            setPosts(data);
          })
          .catch((e) => console.log(e));
      } catch (e) {
        alert("Erro ao receber dados dos posts");
        console.log(e.response);
      }
    })();
  }, [hashtag]);

  return (
    <>
      <Main>
        <Topo>
          <h1># {hashtag}</h1>
        </Topo>
        <Container>
          <Posts>{posts ? posts.map((post) => Post(post)) : <Loading />}</Posts>
          <Trending />
        </Container>
      </Main>
    </>
  );
}
