import axios from "axios";
import BASE_URL from "./api.js";

async function signUp(formData) {
    return axios.post(`${BASE_URL}/sign-up`, formData)
}

async function signIn(loginData){
    return axios.post(`${BASE_URL}/sign-in`, loginData);
}

async function signOut(config){
    return axios.patch(`${BASE_URL}/sign-out`, {}, config);
}

const authApi={
    signUp,
    signIn,
    signOut
}

export default authApi;