import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin-top: 72px;
    background-color: #333333;
    
`;

export const LeftWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #333333;

    @media (max-width: 600px) {
        width: 100%;
    }
`;
export const TimelineName = styled.div`
    position: absolute;
    margin-top: 53px; 
    padding-right: 470px;
    font-size: 43px;
    font-family: Oswald, sans-serif;
    font-weight: bold;
    color: white;
    @media only screen and (max-width: 600px) {
        margin-top: 100px;
        padding-right: 200px;
    }
`;

export const RightWrapper = styled.div`
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

export const TimelineBody = styled.div`
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
