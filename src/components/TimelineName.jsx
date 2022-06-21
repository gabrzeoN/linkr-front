import styled from "styled-components";

export default function Post ({ name, image, url, message, metadata }) {
    return (

        <TimelineName>timeline</TimelineName>

    );
}

const TimelineName = styled.div`

    position: absolute;

    margin-top: 150px;
    padding-right: 470px;

    font-size: 43px;
    font-family: Oswald, sans-serif;
    font-weight: bold;
    color: white;

    @media only screen and (max-width: 600px) {
        margin-top: 150px;
        padding-right: 200px;
    }

`;