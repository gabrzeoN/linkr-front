import { DebounceInput } from "react-debounce-input";
import { useState, useEffect, useRef } from "react";
import Profile from "./Profile";
import axios from "axios";
import styled from "styled-components";
import searchIcon from "../assets/img/search.png";

export default function SearchBar () {

    const [searchResult, setSearchResult] = useState('');
    const [searchProfiles, setSearchProfiles] = useState([]);
    const [searching, setSearching] = useState(false);

    const previousInputValue = useRef(null);

    function profileSearch () {
        if(searchResult.length >= 3) {
            console.log(searchResult);
            const promise = axios.get(`http://localhost:5000/search?name=${searchResult}`);
            promise.then (response => {
                const {data} = response;
                console.log(data[0].name);
                setSearchProfiles(data);
                setSearching(true);
            });
            promise.catch (e => {
                console.log(e);
            });
        } else {
            setSearching(false);
        }
    }

    function showProfiles () {
        if (searchProfiles.length > 0) {
            return searchProfiles.map(profiles => {
                const { id, name, image } = profiles;
                return (

                    <>
                        <Profile id={id} name={name} image={image} />
                    </>

                );
            });
        }
    }

    useEffect(() => {
        previousInputValue.current = searchResult;
        profileSearch();
    }, [searchResult]);

    return (
        <SearchingContainer>
            <SearchBarInput>
                <InputIcon src={searchIcon} width={21} height={21} />
                <DebounceInput 
                placeholder={"Search for people"} 
                minLength={3} 
                debounceTimeout={300} 
                ref={previousInputValue} 
                onChange={(e) => setSearchResult(e.target.value)}/>
            </SearchBarInput>
            <SearchingResults>
                {searching ? <>{showProfiles()}</> : <></>}
            </SearchingResults>
        </SearchingContainer>
    );
}

const SearchingContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: static; 
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 600px) {
        margin-top: 85px;
        margin-left: auto;
        margin-right: auto;
    }

`;

const SearchBarInput = styled.div`

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 350px;
    height: 45px;

    background-color: white;

    font-size: 19px;
    border-radius: 8px;
    
    input{
        width: 350px;
        height: 45px;
        border: 0px;
        border-radius: 8px;
        padding-left: 17px;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 19px;
        color: #9F9F9F;
        background-color: transparent;
        ::placeholder{
            font-family: 'Lato';
            font-weight: 400;
            font-size: 19px;
            line-height: 40px;
            color: #9F9F9F;
        }
    }
    @media only screen and (min-width: 600px) {   

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 563px;
        height: 45px;

        background-color: white;

        font-size: 19px;
        border-radius: 8px;
        
        input{
            width: 563px;
            height: 45px;
            border: 0px;
            border-radius: 8px;
            padding-left: 17px;
            font-family: 'Lato';
            font-weight: 400;
            font-size: 19px;
            color: #9F9F9F;
            background-color: transparent;
            ::placeholder{
                font-family: 'Lato';
                font-weight: 400;
                font-size: 19px;
                line-height: 40px;
                color: #9F9F9F;
            }
        }
    }
`;

const InputIcon = styled.img`

    position: absolute;

    right: 0;

    margin-right: 13px;

`;

const SearchingResults = styled.div`

    position: absolute;

    height: fit-content;

    margin-top: 46px;
    
    display: flex;
    flex-direction: column;

    background-color: #E7E7E7;
    border-radius: 8px;

    @media only screen and (max-width: 600px) {

        width: 350px;

        display: flex;
        display-direction: column;
        justify-content: space-between;
    }

`;