import styled from "styled-components";

export const Container=styled.div`
    
    margin-top: 240px;

    width: 100%;
    height: 164px;

    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px 15px 10px 15px; 

    display:flex;
    justify-content:center;
    
    @media only screen and (min-width: 600px) {
        width: 611px;
        height: 209px;
        border-radius: 16px;
        
        padding: 16px 20px 16px 20px; 
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
`;

export const Title = styled.h1`
    width: 307px;
    height: 20px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    text-align: left;

    color: #707070;

    margin-bottom:10px;

    @media only screen and (max-width: 600px) {
        width:100%;
        text-align: center;
    }
`;

export const Form = styled.form`
    width: 345px;

    display: flex;
    flex-direction:column;
    align-items: flex-end;
    gap:5px;

    @media only screen and (min-width: 600px) {
        width: 503px;
    }
`;

export const Inputs = styled.input`
    width: 100%;
    height: 30px;

    padding: 8px 12px 8px 12px;

    background-color: #EFEFEF;
    border-radius: 5px;
    border:none;

    font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;

    &::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }

    @media only screen and (max-width: 600px) {
        &::placeholder{
            font-size: 13px;
        }
    }
`;

export const Text = styled.textarea`
    width: 100%;
    height: 66px;

    background-color: #EFEFEF;
    border-radius: 5px;
    border:none;

    padding: 8px 12px 8px 12px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    text-align: start;
    color: #949494;   

    &::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        
        text-align: start;
        color: #949494;        
    }

    @media only screen and (max-width: 600px) {
        height: 47px;
        &::placeholder{
            font-size: 13px;
        }
    }
`;

export const Buttons = styled.button`
    width: 112px;
    height: 31px;

    background-color: #1877F2;
    border-radius: 5px;
    border:none;

    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;

    @media only screen and (max-width: 600px) {
        height: 22px;
        font-size: 13px;
    }
`;

export const Picture = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 26.5px;
    object-fit:cover;

    @media only screen and (max-width: 600px) {
        display:none;
    }
`;