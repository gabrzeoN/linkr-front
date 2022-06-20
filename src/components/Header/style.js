import styled from "styled-components";

export const HeaderContent = styled.header`
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 28px;
    position: fixed;
    height: 72px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #151515;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    h1{
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
    }

    @media only screen and (max-width: 600px) {
        z-index: 5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        height: 72px;
        width: 667px;
        max-width: 667px;
        top: 0px;
        left: 0px;
        right: 0px;
        background-color: #151515;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        h1{
            position: absolute;
            margin-left: -5px;
            width: fit-content;
            font-family: 'Passion One';
            font-weight: 700;
            font-size: 45px;
            letter-spacing: 0.05em;
        }
    }

`;

export const Options = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    position: absolute;
    right: 17px;
    ion-icon{
        font-size: 40px;
        margin-right: 10px;
        pointer-events: none;
    }
    img{
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
    }

    @media only screen and (max-width: 600px) {
        margin-right: 220px;
        position: absolute;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        z-index: 5;
        ion-icon{
            font-size: 35px;
            margin-right: 10px;
            pointer-events: none;
        }
        img{
            width: 41px;
            height: 41px;
            border-radius: 26.5px;
        }
    }
`;

export const OptionsBar = styled.div`
    cursor: pointer;
    z-index: 5;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 47px;
    top: 72px;
    right: 0px;
    background: #171717;
    border-bottom-left-radius: 20px;
    ${({optionsBar}) => {
        return optionsBar ? "" : "display: none;"
    }};

    @media only screen and (max-width: 600px) {
        cursor: pointer;
        z-index: 5;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 47px;
        top: 72px;
        right: 0px;
        background: #171717;
        border-bottom-left-radius: 20px;
        ${({optionsBar}) => {
            return optionsBar ? "" : "display: none;"
        }};
    }

`;

export const Logout = styled.div`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    
`;

export const HideOptions = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 4;
    ${({optionsBar}) => {
        return optionsBar ? "" : "display: none;"
    }};
`;