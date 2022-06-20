import axios from "axios";

const BASE_URL="http://localhost:5000";

function createHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

async function signUp(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData)
    return promise;
}

async function getTrendingHashtags(limit, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/trending/${limit}`, auth);

    return promise;
}

const api={
    signUp,
    getTrendingHashtags
}

export default api; 