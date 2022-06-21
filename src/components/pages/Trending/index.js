import axios from "axios";
import Loading from "../../../assets/Loading"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Tags } from "./style";

export default function TrendingTags() {
  const token = localStorage.getItem("token");
  const [trendings, setTrendings] = useState();

  useEffect(() => {
    (async () => {
      try {
        axios
          .get(`https://linkr-mggg.herokuapp.com/trending`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            const { data } = response;
            setTrendings(data);
          })
          .catch((e) => console.log(e));
      } catch (e) {
        alert("Erro ao receber tags em trending");
        console.log(e.response);
      }
    })();
  }, []);

  return (
    <>
      <Box>
        <h1>trending</h1>
        <Tags>
          {trendings ? (
            trendings.map((trending) => {
              const { hashtag } = trending;
              return (
                <Link to={`/hashtag/${hashtag}`} key={hashtag}>
                  <p># {hashtag}</p>
                </Link>
              );
            })
          ) : (
            <Loading />
          )}
        </Tags>
      </Box>
    </>
  );
}