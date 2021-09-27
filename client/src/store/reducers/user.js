import {GET_JWT, GET_USER_PROFILE, USER_LOGOUT} from '../actions/constants'

const userReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_USER_PROFILE:
        return {
          ...state,
          profile: payload
        };
      case USER_LOGOUT:
        return {
          ...state,
          profile: undefined,
        };
      case GET_JWT:
        return {
          ...state,
          jwt: payload,
        };
      default:
        return state
    }
}

export default userReducer;
