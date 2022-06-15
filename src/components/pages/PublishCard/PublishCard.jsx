import { Container, Picture, Div, Title, Form, Inputs, Text, Buttons } from "./style";
import imagePerfil from "./../../../assets/img/image 4.png";

export default function PublishCard(){
    return (
        <Container>
            <Picture src={imagePerfil} alt="foto de perfil" />
            <Div>
                <Title>What are you going to share today?</Title>
                <Form>
                    <Inputs placeholder="http://..."></Inputs>
                    <Text placeholder="Awesome article about #javascript"></Text>
                    <Buttons>Publish</Buttons>
                </Form>
            </Div>
        </Container>
    )
}