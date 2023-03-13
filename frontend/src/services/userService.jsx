import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL;

/**
 * 
 * @param {*} e 
 * @returns 
 */
export async function getJWT(e) {
    try {
        const res = await axios.post(`${apiUrl}/api/v1/user/login`, { 
            email: e.email, 
            password: e.password
        });
        return res.data.body;
      } catch (e) {
        return e.response.data;
    }
}

/**
 * 
 * @param {*} jwt 
 * @returns 
 */
export const getUser = async (jwt) => {
    const config = { headers: { "Authorization" : `Bearer ${jwt}`}};
    try {
        const res = await axios.post(`${apiUrl}/api/v1/user/profile`, {}, config);
        return res.data.body;
      } catch (e) {
        return e.response.data;
    }
}


export const updateUserProfile = async (e, jwt) => {
    const config = { headers: { "Authorization" : `Bearer ${jwt}`}};

    try {
        const res = await axios.put(`${apiUrl}/api/v1/user/profile`, {
            firstName: e.firstName,
            lastName: e.lastName
        }, 
            config
        );
        console.log('updateUserProfile res', res);
        return res.data;
      } catch (e) {
        return e.response.data;
    }
}


