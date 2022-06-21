import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin-top: 72px;
    background-color: #333333;
`;

const LeftWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #333333;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const RightWrapper = styled.div`
    width: 40%;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #333333;

    @media (max-width: 767px) {
        display: none;
    }
`;

const TimelineBody = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 100px;

    @media (max-width: 610px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        width: 100%;
        align-items: center;
    }
`;

const TitleContainer = styled.p`
    width: 90%;
    text-align: left;
    margin-top: 53px;  
    margin-bottom: 43px;
    word-break: break-all;
    font-size: 43px;
    font-weight: 700;
    line-height: 49px;
    color: #FFF;
    font-family: "Oswald", sans-serif;
    @media (max-width: 610px) {
        font-size: 33px;
        margin: 19px 0;
        padding-left: 17px;
    }
    @media (min-width: 912px) {
        width: 72%;
    }
`

export{
    Container,
    LeftWrapper,
    RightWrapper,
    TimelineBody,
    TitleContainer
}