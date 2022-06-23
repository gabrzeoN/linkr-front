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

export const ContainerUserData= styled.div`
    width:100%;
    height:146px;

    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left: 200px;

    @media only screen and (max-width: 600px) {
        padding-left:17px;
        padding-right: 17px;
    }
`;
export const Div = styled.div`
    height:146px;
    gap:18px;

    display:flex;
    align-items:center;
`;

export const Picture = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    object-fit:cover;

    @media only screen and (max-width: 600px) {
        display:none;
    }

`;

export const Title = styled.h1`
    height: 49px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;

    color: #FFFFFF;

    display: flex;
    align-items: center;

    @media only screen and (min-width: 600px) {
        height: 64px;
        font-size: 43px;
    
    }
`;

export const Button = styled.button`
    width: 112px;
    height: 31px;

    background-color: #1877F2;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        width: 90px;
        height: 31px;

        margin-top: 5px;
    }
`;

export const Text = styled.h1`
    width:100%;
    font-family:'Lato';
    font-weight:400;
    font-size:25px;
    line-height: 64px;
    text-align: center;
    color: #ffffff;
`;