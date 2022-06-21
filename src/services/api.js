import axios from "axios";

const BASE_URL="https://linkr-mggg.herokuapp.com";

async function signUp(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData)
    return promise;
}

const api={
    signUp,
}

export default api; 
