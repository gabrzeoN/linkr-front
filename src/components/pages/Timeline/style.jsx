import styled from "styled-components";

export const TimelineBody = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 72px;
    padding-top: 34px;

    @media only screen and (min-width: 600px) {
        
    }  
`;

export const TimelineName = styled.div`
    width: 100%;
    height: 64px;

    font-family: Oswald, sans-serif;
    font-weight: 700;
    font-size: 43px;
    text-align: left;
    color: #ffffff;

    display:flex;
    justify-content: left;
    padding-left:17px;

    margin-top: 19px; 
    @media only screen and (min-width: 600px) {
        margin-top: 53px;
    }
`;