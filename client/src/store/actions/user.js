import {USER_LOGIN} from './constants';
import axios  from 'axios';


export const getUser = () => dispatch => {
  const config = {
      headers: {
          "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
      },
  };
  return axios.post('http://localhost:3001/api/v1/user/profile', {}, config)
    .then(response => {
        dispatch({
            type: USER_LOGIN,
            payload: response.data.body
        });
    });
}

/* export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}
 */