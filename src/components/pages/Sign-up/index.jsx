import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CenterLoader, Title, SubTitle, TopBar, LowerBar, StyledInput, Container, Form, StyledButton, StyledLink, Components } from "./style";
import Loading from "../../../assets/Loading"
import api from "../../../services/api"
import Swal from 'sweetalert2';

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
        <Container>
            <TopBar>
                <Components>
                    <Title>linkr</Title>
                    <SubTitle>save, share and discover<br />
                        the best links on the web</SubTitle>
                </Components>
            </TopBar>
            <LowerBar>
                <Form onSubmit={handleSignUp}>
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
                        placeholder="e-mail"
                        type="email"
                    />
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.name}
                        name="name"
                        placeholder="username"
                        type="text"
                    />
                    <StyledInput
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
                    <StyledLink to="/">Switch back to log in</StyledLink>
                </Form>
            </LowerBar>
        </Container>

    )
}
export default SignUp



