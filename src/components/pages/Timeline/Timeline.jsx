import styled from "styled-components";
/* import Header from "./Header"; */
import PostList from "./PostList";

/* const urlMetadata = null; */ 

export default function Timeline () {

    return (

            <TimelineBody>
                {/* <Header /> */}
                <PostList />
            </TimelineBody>

    );

}

const TimelineBody = styled.div`

    width: 100vw;
    height: 100hw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #E5E5E5;

`;