import { Container, Picture, Div, Title, Form, Inputs, Text, Buttons } from "./style";
import UserContext from "../../../contexts/UserContext";
import { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function PublishCard(){
    const {userData} = useContext(UserContext);
    const [post, setPost] = useState({url: "", message:""});
    const [disabled, setDisabled] = useState(false);

    const config = {headers: {Authorization: `Bearer ${userData.token}`}};

    function submitPublish(e){
        e.preventDefault();
        setDisabled(true);
        console.log("post", post);

        const URL = "http://localhost:5000/posts";
        const promise = axios.post(URL, post, config);
        promise.then(() => {
            setDisabled(false);
            setPost({url:"", message:""});
        });
        promise.catch((error) => {
            console.log(error.response.data)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Houve um erro ao publicar seu link!"
            })
            setDisabled(false);
        });

    }

    return (
        <Container>
            <Picture src={userData.image} alt="foto de perfil" />
            <Div>
                <Title>What are you going to share today?</Title>
                <Form onSubmit={submitPublish}>
                    <Inputs placeholder="http://..."
                            type="text"
                            value={post.url}
                            onChange={(e) => setPost({...post, url:e.target.value})} 
                            disabled={disabled}/>

                    <Text placeholder="Awesome article about #javascript"
                        type="text"
                        value={post.message}
                        onChange={(e) => setPost({...post, message:e.target.value})}
                        disabled={disabled}/>

                    <Buttons type="submit" disabled={disabled}> 
                        {!disabled ? "Publish" : "Publishing..."}
                    </Buttons>
                </Form>
            </Div>
        </Container>
    )
}