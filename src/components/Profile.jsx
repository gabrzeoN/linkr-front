import styled from "styled-components";

export default function Profile ({ name, image }) {
    return (

        <SingleProfile>
            <ProfilePic src={image} width={39} height={39} alt={"user-pic"} />
            <ProfileName>{name}</ProfileName>
        </SingleProfile>

    );
}

const SingleProfile = styled.div`

    display: flex;
    
    height: 50px;
    width: 563px;

`;

const ProfilePic = styled.img`

    margin-top: 6px;
    margin-left: 17px;

    height: 39px;
    width: 39px;

    border-radius: 100%;

`;

const ProfileName = styled.div`

    margin-top: 15px;
    margin-left: 11px;

    height: 26px;
    width: 200px;

    font-family: Lato;
    color: #515151;

`;