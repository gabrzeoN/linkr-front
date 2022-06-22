import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineComment } from "react-icons/ai";
import { CommentContainer, CommentsQuantity, MainContainer } from "./style";

export default function Comment({ setComments, comments, totalComments }) {


    function handleComment() {
        setComments(!comments)
    }

    return (
        <>
            <MainContainer>   
                <CommentContainer>
                    <AiOutlineComment onClick={() => { handleComment() }} />
                </CommentContainer>
                    <CommentsQuantity>{totalComments}  {totalComments !== 1 ? 'comments' : 'comment'}</CommentsQuantity>
                <ReactTooltip place="bottom" type="light" effect="solid" />
            </MainContainer> 
        </>
    );
}