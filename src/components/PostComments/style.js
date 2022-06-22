import styled from "styled-components";

const CommentContainer = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: center;
            
    & > * {
        width: 33px;
        height: 100%;
        transition: all .2s;
        filter: brightness(0.9);
        cursor: pointer;
    }
`

const CommentsQuantity = styled.div`
    font-size: 10px;
`
const MainContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export {
    CommentContainer,
    CommentsQuantity,
    MainContainer
}