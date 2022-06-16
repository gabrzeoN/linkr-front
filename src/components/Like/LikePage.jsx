import styled from "styled-components";
import Like from "./";

export default function LikePage(){
    return(
        <>
            <LikePageContent>
                <Like postId={1} ></Like>
            </LikePageContent>

            <LikePageContent>
                <Like postId={2}></Like>
            </LikePageContent>
        </>
    );
}

const LikePageContent = styled.div`
    width: 150px;
    height: 150px;
    background-color: gray;
    border-radius: 20px;
    margin: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;