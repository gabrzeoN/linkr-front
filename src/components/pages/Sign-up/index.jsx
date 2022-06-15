import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Loading from "../../../assets/Loading"
import api from "../../../services/api"
import Swal from 'sweetalert2';
import { Main, StyledButton, CenterLoader } from "../Sing-in/style";

function SignUp() {
    const [button, setButton] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: ""
    })
    const navigate = useNavigate();

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData })
    }

    function handleSignUp(e) {
        e.preventDefault();
        const { email, password, name, image } = formData;
        if (email.length === 0 || password.length === 0 || name.length === 0 || image.length === 0) {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: 'Todos os campos precisam ser preenchidos, por favor.',
            });
            setButton(true)
            return;
        } else {
            const promise = api.signUp(formData);
            setButton(false)
            promise.then(() => {
                navigate("/");
            });
            promise.catch((error) => {
                if (error.response.status === 422) {
                    setFormData({
                        email: '',
                        password: '',
                    });
                    Swal.fire({
                        icon: 'error',
                        title: "OOPS...",
                        text: 'Todos os campos precisam ser preenchidos corretamente, confira seus dados, por favor.',
                    });
                    setButton(true)
                    return;
                }

                if (error.response.data === 'username already exists' && error.response.status === 409) {
                    setFormData({
                        username: ''
                    });
                    Swal.fire({
                        icon: 'error',
                        title: "OOPS...",
                        text: 'Nome de usuário já existente, escolha outro, por favor.',
                    });
                    setButton(true)
                    return;
                }

                if (error.response.status === 409) {
                    setFormData({
                        email: '',
                        password: '',
                    });
                    Swal.fire({
                        icon: 'error',
                        title: "OOPS...",
                        text: 'Esse email já existe, confira seus dados, por favor.',
                    });
                    setButton(true)
                    return;
                }

                if (formData.username.length < 3) {
                    setFormData({
                        username: ''
                    })
                    Swal.fire({
                        icon: 'error',
                        title: "OOPS...",
                        text: 'O username precisa ter no mínimo 3 caracteres.',
                    });
                    setButton(true)
                    return;
                }
            });
        }
    }
    
    return (
        <Main>
            <section className="logo">
                <h1>linkr</h1>
                <p>save, share and discover the best links on the web</p>
            </section>
            <section className="inputs">
                <form onSubmit={handleSignUp}>
                    <input
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
                        placeholder="e-mail"
                        type="email"   
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
                        placeholder="password"
                        type="password"     
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.name}
                        name="name"
                        placeholder="username"
                        type="text"    
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.image}
                        name="image"
                        placeholder="picture url"
                        type="url"    
                    />
                    {button ?
                        <StyledButton>Sign Up</StyledButton>
                        :
                        <StyledButton Loading={true}><CenterLoader><Loading height={35} width={43} /></CenterLoader></StyledButton>
                    }
                    
                </form>
                <Link to="/">
                    <p>Switch back to log in</p>
                </Link>
            </section>
        </Main>
    )
}

export default SignUp



