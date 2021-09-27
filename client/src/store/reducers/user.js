import {USER_LOGIN} from '../actions/constants'

const userReducer = (state = [], {type, payload}) => {
    switch (type) {
      case USER_LOGIN:
        return {
          ...state,
          profile: payload
        };
      default:
        return state
    }
}

export default userReducer;
