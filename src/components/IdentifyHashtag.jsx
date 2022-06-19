import ReactHashtag from "@mdnm/react-hashtag";
import styled from "styled-components";

const IdentifyHashtag = (props) => (
  <ReactHashtag
    renderHashtag={(hashtagValue) => {
      return <StyledHashtag href={`/hashtag/${hashtagValue.replace("#", "")}`}>
        {hashtagValue}
      </StyledHashtag>
    }}
  >
    {props.children}
  </ReactHashtag>
);

export default IdentifyHashtag;

const StyledHashtag = styled.a`
  font-weight: 700;
  color: white;
`;