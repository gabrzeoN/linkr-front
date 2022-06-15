import { Container, Picture, Div, Title, Form, Inputs, Text, Buttons } from "./style";
import imagePerfil from "./../../../assets/img/image 4.png";
import { useState } from "react";

export default function PublishCard(){
    const [post, setPost] = useState({});
    const [disabled, setDisabled] = useState(false);

    const token = ""; //TODO:pegar token do localStorage
    const config = {headers: {Authorization: `Bearer ${token}`}};

    function submitPublish(e){
        e.preventDefault();
        setDisabled(true);

        console.log("post", post);

        //TODO:fazer o deploy do banco e definir o objeto que será enviado
        const URL = "http://localhost:5000/posts"
        const promise = axios.post(URL, post, config);
        promise.then(() => console.log("post enviado"));
        promise.catch((erro) => {
            console.log("erro", erro);
            setDisabled(false);
        });

    }

    return (
        <Container>
            <Picture src={imagePerfil} alt="foto de perfil" />
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
                        value={post.text}
                        onChange={(e) => setPost({...post, text:e.target.value})}
                        disabled={disabled}/>

                    <Buttons type="submit" disabled={disabled}> {!disabled ? "Publish" : "Publishing..."}</Buttons>
                </Form>
            </Div>
        </Container>
    )
}