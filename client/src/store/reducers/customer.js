import {USER_LOGIN} from '../actions/constants'

const customerReducer = (state = [], {type, payload}) => {
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

export default customerReducer;
