import axios from "axios";

// const BASE_URL="https://linkr-mggg.herokuapp.com";
const BASE_URL="http://localhost:5000";

async function signUp(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData)
    return promise;
}

const api={
    signUp,
    BASE_URL
}

export default api; 
