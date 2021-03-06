import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Main } from "./style";
import api from "../../../services/api";
import UserContext from "../../../contexts/UserContext";

export default function SignInPage(){
    const postLoginURL = `${api.BASE_URL}/sign-in`; 
    const {setUserData} = useContext(UserContext);
    const [loginData, setLoginData] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
        setDisabled(true);
        try{
            const {data} = await axios.post(postLoginURL, loginData);
            const {id, name, image, token} = data;
            setUserData({id, name, image, token});
            localStorage.setItem('token', token);
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

