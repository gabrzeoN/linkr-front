import styled from "styled-components";

export default function Post ({ userImage, userName, description, url }) {

    return (

        <SinglePost >
            <PostAuth>
                <UserPic>
                    <img src={userImage} height={50} width={50} alt={'user-image'}/>
                </UserPic>
                <UserName>{userName}</UserName>
            </PostAuth>
            <PostInfo>
                <PostDescription>{description}</PostDescription>
                <PostLink>{url}</PostLink>
            </PostInfo>
        </SinglePost>

    );

}

const SinglePost = styled.div`

    height: 276px;
    width: 611px;

    margin-top: 29px;

    display: flex;
    flex-direction: column;

    background: #171717;
    border-radius: 16px;

`;

const PostAuth = styled.div`

    height: 55px;

    margin-top: 16px;

    display: flex;

`;

const UserPic = styled.div`

    width: 50px;
    height: 50px;

    margin-left: 18px;

    background: white;
    border-radius: 26.5px;

`;

const UserName = styled.div`

    width: 502px;
    height: 23px;

    margin-top: 5px;
    margin-left: 18px;

    background: green;

`;

const PostInfo = styled.div`

    display: flex;
    flex-direction: column;

`;

const PostDescription = styled.div`

    width: 502px;
    height: 50px;

    margin-top: -15px;
    margin-left: 86px;

    background: yellow;

`;

const PostLink = styled.div`

    width: 503px;
    height: 155px;

    margin-left: 86px;

    background: red;
    border-radius: 11px;

`;
