import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBar = styled.div`
    min-width: 100vw;
    min-height: 175px;
    background-color: #151515;
    position: relative;
    padding-left: 20%;
    padding-bottom: 50%;
    @media (min-width: 767px){
        min-width: 65vw;
        min-height: 100vh;
        justify-content: center;
        align-items: flex-start;
        position: relative;
    }
`

const Title = styled.div`
    font-size: 76px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: 'Passion One', cursive;
    
    @media (min-width: 767px){
        font-size: 106px;
    }
`;

const SubTitle = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 23px;
    font-family: 'Oswald', sans-serif;
    @media (min-width: 767px){
        font-size: 43px;
    }
`

const Container = styled.div`
    background-color: #333333;
    @media (min-width: 767px){
        display: flex;
    }
`
const LowerBar = styled.div`
    background-color: #333333;
    min-width: 100vw;
    min-height: 81vh;
    padding-top: 40px;
    @media (min-width: 767px){
        min-width: 35vw;
        min-height: 100vh;
        position: relative;
        padding-top: 0;
    }
`
const Components = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 767px){
        padding-top: 35%;
        display: flex;
        align-items: flex-start;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    @media (min-width: 767px){
        position: relative;
        top: 30%;
        
    }
`;

const StyledInput = styled.input`
    all: unset;
    box-sizing: border-box;
    width: 80%;
    height: 55px;
    padding: 18px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
    ::placeholder {
        color:#9F9F9F;
        font-size: 22px;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
    }
`;

const StyledButton = styled.button`
    border: none;
    text-align: center;
    width: 80%;
    height: 55px;
    border-radius: 5px;
    background-color: #1877F2;
    font-size: 22px;
    font-weight: bold;
    color: white;
    font-family: 'Oswald', sans-serif;
`;
const StyledLink = styled(Link)`
    font-family: 'Lato', sans-serif;
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
`;
const CenterLoader = styled.div`
display:flex;
align-items: center;
justify-content: center;
`

export {
    Title,
    SubTitle,
    TopBar,
    Container,
    LowerBar,
    Form,
    StyledInput,
    StyledButton,
    StyledLink,
    CenterLoader,
    Components
}