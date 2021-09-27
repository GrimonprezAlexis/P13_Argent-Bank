import axios from "axios";

export async function getUser() {
    const config = {
        headers: {
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
    };
    return await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);
}