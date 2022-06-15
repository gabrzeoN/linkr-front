import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 144px;
        height: 100%;
        width: 70%;
        background: #151515;
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
        color: white;
        z-index: 1;
        h1{
            font-family: 'Passion One';
            font-weight: 700;
            font-size: 106px;
            line-height: 117px;
            letter-spacing: 0.05em;
        }
        p{
            
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 43px;
            line-height: 64px;
            width: 442px;
        }
    }
    .inputs{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 30%;
        background: #333333;
        color: white;
        input{
            display: flex;
            width: 429px;
            height: 65px;
            border: 0px;
            border-radius: 6px;
            padding-left: 17px;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            color: #9F9F9F;
            margin-bottom: 13px;
            ::placeholder{
                font-family: 'Oswald';
                font-weight: 700;
                font-size: 27px;
                line-height: 40px;
                color: #9F9F9F;
            }
        }
        button{
            width: 429px;
            height: 65px;
            border: 0px;
            border-radius: 6px;
            padding-left: 17px;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            color: white;
            margin-bottom: 22px;
            background: #1877F2;
            border-radius: 6px;
            :hover{
                background: #1256af;
            }
        }
        a{
            font-family: 'Lato';
            font-size: 20px;
            line-height: 24px;
            text-decoration-line: underline;
            color: white;
        }
    }

    @media (max-width: 1450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 175px;
            padding: 10px 0px 27px 0px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            h1{
                font-size: 76px;
                line-height: 84px;
                letter-spacing: 0.05em;
            }
            p{ 
                font-size: 23px;
                line-height: 34px;
                text-align: center;
                width: 237px;
            }
        }
        .inputs{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            input{
                :first-child{
                    margin-top: 40px;
                }
                width: 330px;
                height: 55px;
                font-size: 22px;
                line-height: 33px; 
                ::placeholder{
                    font-size: 22px;
                    line-height: 33px; 
                }
            }
            button{
                font-size: 22px;
                line-height: 33px;
                width: 330px;
                height: 55px;
            }
            a{
                font-size: 17px;
                line-height: 20px;
            }
        }
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

const CenterLoader = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
export {
    Main,
    StyledButton,
    CenterLoader
}