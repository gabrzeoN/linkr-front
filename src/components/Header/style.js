import styled from "styled-components";

export const HeaderContent = styled.header`
    height: 72px;
    z-index: 5;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 28px;

    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;

    background-color: #151515;
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h1{
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
    }

    @media only screen and (max-width: 600px) {
        padding: 0 17px;
        h1{
            font-size: 45px;
        }
    }

`;

export const Options = styled.div`
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 16px;

    z-index: 5;
    
    ion-icon{
        font-size: 40px;
        pointer-events: none;
    }

    img{
        width: 53px;
        height: 53px;
        border-radius: 50%;
    }

    @media only screen and (max-width: 600px) {
        gap: 8px;

        ion-icon{
            font-size: 35px;
        }

        img{
            width: 41px;
            height: 41px;
        }
    }
`;

export const OptionsBar = styled.div`
    width: 150px;
    height: 47px;

    cursor: pointer;

    z-index: 5;
    position: fixed;
    top: 72px;
    right: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: #171717;
    border-bottom-left-radius: 20px;
    ${({optionsBar}) => {
        return optionsBar ? "" : "display: none;"
    }};

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