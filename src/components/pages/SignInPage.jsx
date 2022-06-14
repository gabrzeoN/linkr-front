import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from 'sweetalert2';

import UserContext from "../../contexts/UserContext";

export default function SignInPage(){
    const postLoginURL = "http://localhost:5000/sign-in"; 
    const {setUserData} = useContext(UserContext);
    const [loginData, setLoginData] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
        setDisabled(true);
        try{
            const {data} = await axios.post(postLoginURL, loginData);
            const {name, picture, token} = data;
            setUserData({name, picture, token});
            navigate("/timeline");
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data
            })
            setDisabled(false);
        }
    }

    return(
        <Main>
            <section className="logo">
                <h1>linkr</h1>
                <p>save, share and discover the best links on the web</p>
            </section>
            <section className="inputs">
                <form onSubmit={login}>
                    <input
                        required
                        type="email"
                        placeholder="e-mail"
                        disabled={disabled}
                        value={loginData.email}
                        onChange={e => setLoginData({...loginData, email: e.target.value})}     
                    />
                    <input
                        required
                        type="password"
                        placeholder="password"
                        disabled={disabled}
                        value={loginData.password}
                        onChange={e => setLoginData({...loginData, password: e.target.value})}     
                    />
                    <button type="submit" disabled={disabled}>Log in</button>
                </form>
                <Link to="/sign-up">
                    <p>First time? Create an account!</p>
                </Link>
            </section>
        </Main>
    );
}

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

    /* @media (min-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    } */
`;