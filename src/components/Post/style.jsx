import styled from "styled-components";

export const SinglePost = styled.div`
    width: 100%;
    height: 232px;

    display: flex;
    justify-content: center;
    padding: 15px 15px 15px 15px;
    gap:18px;
    z-index:1;
    background-color: #171717;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;

    margin-top: 16px;

    position: relative;
    @media only screen and (min-width: 600px) {
        width: 611px;
        height: 276px;
        padding: 20px 18px;
        border-radius: 16px;
    }
`;

export const PostAuth = styled.div`
    width: 50px;
    height: 55px;

    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 17px;

    color: #FFFFFF;
`;

export const DivIcon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    gap: 12px;

    position: absolute;
    top:10px;
    right: 10px;
    @media only screen and (min-width: 600px) {
        top: 22px;
        right: 22px;
    }
`;

export const UserPic = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 50%;
    object-fit:cover;
    @media only screen and (min-width: 600px) {
        width: 50px;
        height: 50px;
    }
`;

export const PostInfo = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap:7px;
`;

export const UserName = styled.h1`
    width: 100%;
    
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    
    cursor: pointer;

    @media only screen and (min-width: 600px) {
        height: 23px;
        font-size: 19px;
    }
`;

export const EditMessage = styled.input`
    width: 100%;
    height: 44px;

    border-radius:7px;
    border:none;
    background-color:#ffffff;

    @media only screen and (max-width: 600px) {
        height: 30px;
    }
`;

export const PostMessage = styled.div`
    width:100%;
    height: 52px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #B7B7B7;

    @media only screen and (max-width: 600px) {
        font-size: 15px;
        line-height: 18px;
    }
`;

export const PostLikes = styled.div`
    width: 60px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PostMetadata = styled.a`
    width: 100%;
    height: 115px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7px;

    @media only screen and (min-width: 600px) {
        height: 155px;
    }

`;

export const Div = styled.div`
    padding-left: 11px;

    width:165px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    @media only screen and (min-width: 600px) {
        width: 305px;
    }
`;

export const MetaTitle = styled.div`
    width: 100%;
    font-size: 11px;
    font-weight: 700;
    color: #CECECE;

    @media only screen and (min-width: 600px) {
        font-size: 16px;
    }
`;

export const MetaDescription = styled.div`
    width: 100%;
    height: 30px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: #9B9595;

    overflow: hidden;

    @media only screen and (min-width: 600px) {
        height: 39px;
        font-size: 11px;
        line-height: 13px;
    }

`;

export const MetaLink = styled.a`
    width: 145px;
    height: 19px;

    font-size: 8px;
    line-height: 10px;
    color: #CECECE;

    text-decoration: none;
    
    :visited{
        text-decoration: none;
        color: #CECECE;
    }

    overflow: hidden;

    @media only screen and (min-width: 600px) {
        height: 13px;
        font-size: 11px;
        line-height: 13px;
    }
`;

export const MetaImage = styled.img`
    width: 95px;
    height: 115px;

    border-left: 1px solid #303030;
    border-radius: 0px 11px 11px 0px;
    overflow:hidden;
    object-fit: cover; 

    @media only screen and (min-width: 600px) {
        width: 153.44px;
        height: 155px;
    }

`;