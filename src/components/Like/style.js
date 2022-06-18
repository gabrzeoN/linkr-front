import styled from "styled-components";

export const LikedContent = styled.button`
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    ion-icon{
        color: #AC0000;
        font-size: 32px;
    }
    p{
        font-family: 'Lato';
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        color: #FFFFFF;
    }
`;

export const NotLikedContent = styled.button`
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    ion-icon{
        color: white;
        font-size: 32px;
    }
    p{
        font-family: 'Lato';
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        color: #FFFFFF;
    }
`;