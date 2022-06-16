import styled from "styled-components";
import PostList from "./PostList";

export default function Timeline () {
    return (

            <TimelineBody>
                <PostList />
            </TimelineBody>

    );
}

const TimelineBody = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #E5E5E5;

`;