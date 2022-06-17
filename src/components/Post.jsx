import styled from "styled-components";

export default function Post ({ name, image, url, message, metadata }) {
    return (

        <SinglePost >
            <PostAuth>
                <UserPic src={image} height={50} width={50} alt={'user-image'} />
                <UserName>{name}</UserName>
            </PostAuth>
            <PostInfo>
                <PostMessage>{message}</PostMessage>
                <PostLikes></PostLikes>
                <PostMetadata target="_blank" rel="noreferrer" href={url}>
                    <MetaTitle>{metadata.title}</MetaTitle>
                    <MetaDescription>{metadata.description}</MetaDescription>
                    <MetaLink>{url}</MetaLink>
                    <MetaImage src={metadata.image} height={155} width={155} alt={'article-image'} />
                </PostMetadata>
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

const UserPic = styled.img`

    width: 50px;
    height: 50px;

    margin-left: 18px;

    border-radius: 26.5px;

`;

const UserName = styled.div`

    width: 502px;
    height: 23px;

    margin-top: 5px;
    margin-left: 18px;

    color: white;

`;

const PostInfo = styled.div`

    display: flex;
    flex-direction: column;

`;

const PostMessage = styled.div`

    width: 502px;
    height: 45px;

    margin-top: -15px;
    margin-left: 86px;

    color: white;

`;

const PostLikes = styled.div`

    position: absolute;    

    width: 40px;
    height: 55px;

    margin-top: 15px;
    margin-left: 25px;

    background-color: white;

`;

const PostMetadata = styled.a`

    position: relative;

    width: 503px;
    height: 155px;

    margin-left: 86px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    color: white;

`;

const MetaTitle = styled.div`

    position: absolute;

    margin-top: 10px;
    margin-left: 10px;

    width: 328px;
    font-size: 16px;
    font-weight: bold;
    color: #CECECE;

`;

const MetaDescription = styled.div`

    position: absolute;

    margin-top: 55px;
    margin-left: 10px;

    width: 328px;
    font-size: 13px;
    color: #9B9595;

`;

const MetaLink = styled.div`
    
    margin-top: 120px;
    margin-left: 10px;
    
    width: 328px;
    font-size: 10px;
    color: #CECECE;

    a{
        text-decoration: none;
    }
    
    a:visited{
        text-decoration: none;
        color: #CECECE;
    }

`;

const MetaImage = styled.img`

    position: absolute;

    right: 0;
    top: 0;

    width: 155px;
    height: 153px;

    border-left: 1px solid #303030;
    border-radius: 0px 11px 11px 0px;

`;
