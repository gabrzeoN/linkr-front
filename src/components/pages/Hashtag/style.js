const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  }
`;

const Topo = styled.div`
  width: 100%;
  height: 158px;
  h1 {
    font-size: 43px;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    line-height: 63.73px;
    color: #ffffff;
    margin-top: 53px;
    margin-bottom: 41px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Posts = styled.div`
  width: 613px;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-right: 25px;
`;

const Loading = styled.div`
  animation: is-rotating 1s infinite;
  width: 25px;
  height: 25px;
  border: 4px solid #1877f2;
  border-top-color: #ffffff;
  border-radius: 50%;
  margin-left: 300px;
`;

export{
    Main, 
    Topo,
    Container,
    Posts,
    Loading
}