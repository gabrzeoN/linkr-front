import axios from "axios";

const BASE_URL=localStorage;

async function signUp(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData)

    return promise;
}


const api={
    signUp,
}

export default api;