import styled from "styled-components";

export const UserTimeline = styled.main`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;

    background-color:#333333;
`;

export const ContainerUserData= styled.div`
    width:100%;
    height:146px;

    display:flex;
    align-items:center;
    gap:18px;
    padding-left: 18px;

    @media only screen and (max-width: 600px) {
        padding-left:17px;
    }
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
    line-height: 49px;

    color: #FFFFFF;

    @media only screen and (min-width: 600px) {
        height: 64px;
        font-size: 43px;
        line-height: 64px;
    }
`;

