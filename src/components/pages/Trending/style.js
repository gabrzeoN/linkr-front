import styled from "styled-components";

const Box = styled.div`
  width: 301px;
  height: 406px;
  display: flex;
  flex-direction: column;
  background-color: #171717;
  border-radius: 16px;
  position: sticky;
  top: 215px;
  h1 {
    font-size: 25px;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    line-height: 25.01px;
    color: #ffffff;
    border-radius: 16px;
    margin-top: 15px;
    margin-bottom: 14px;
    margin-left: 16px;
  }
`;

const Tags = styled.div`
  width: 300px;
  height: 335px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #171717;
  border-top: solid 1px #484848;
  padding: 15px 16px;
  p {
    font-size: 19px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    font-style: normal;
    line-height: 0px;
    letter-spacing: 5%;
    color: #fff;
    margin: 15px 0px;
  }
`;

export {
  Box,
  Tags,
}