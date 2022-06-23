import axios from "axios";

const BASE_URL="https://linkr-mggg.herokuapp.com";
// const BASE_URL="http://localhost:5000";

function createHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

async function signUp(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData)
    return promise;
}
async function createComment(token, text, postId) {
    const auth = createHeaders(token)
    const body = { text, postId }

    const promise = await axios.post(`${BASE_URL}/comments`, body, auth)
    return promise;
}
async function getComments(token, postId) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/comments/${postId}`, auth);
    return promise;
}
async function commentsCounter(postId, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/comments/counter/${postId}`, auth);
    return promise;
}

const api={
    signUp,
    BASE_URL,
    createComment,
    getComments,
    commentsCounter,

}

export default api; 
