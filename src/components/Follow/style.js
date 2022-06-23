import styled from "styled-components";

export const FollowContent = styled.button`
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    width: 112px;
    height: 31px;
    background: #1877F2;
    border-radius: 5px;
    p{
        font-family: 'Lato';
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }
    @media only screen and (max-width: 600px) {
        width: 90px;
        height: 31px;
        margin-top: 5px;
    }
`;

export const UnfollowContent = styled.button`
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    width: 112px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    p{
        font-family: 'Lato';
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #1877F2;
    }
    @media only screen and (max-width: 600px) {
        width: 90px;
        height: 31px;
        margin-top: 5px;
    }
`;