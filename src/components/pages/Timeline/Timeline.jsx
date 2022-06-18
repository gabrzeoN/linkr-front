import Header from "../../Header/index.jsx";
import PublishCard from "./../PublishCard/PublishCard.jsx";
import PostList from "./../../PostList.jsx";
import TimelineName from "./../../TimelineName.jsx";
import styled from "styled-components";

export default function Timeline(){
    return (
        <>
            <TimelineBody>
                <Header />
                <TimelineName />
                <PublishCard />
                <PostList />
            </TimelineBody>
        </>
    );
}

const TimelineBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    /* @media only screen and (min-width: 600px) {
        width: 611px;
        height: 209px;
        border-radius: 16px;
        
        padding: 16px 20px 16px 20px; 
        justify-content: space-between;
        align-items: flex-start;
    } */

`;