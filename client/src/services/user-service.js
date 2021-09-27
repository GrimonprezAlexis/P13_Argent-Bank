import axios from "axios";

export async function getUser(jwt) {
    const config = {
        headers: {
            "Authorization" : `Bearer ${jwt}`
        },
    };
    return await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);
}

export async function getJWT(e) {
    const res = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: e.email,
        password: e.password
    });    
    return res.data.body.token;
}