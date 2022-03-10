import {OTP, SIGN_IN,AUTH_STATE, LOG_OUT, NOT_SINGUPED} from '../actions/types'
const authReducer=(state={},action)=>{
switch (action.type) {
    case SIGN_IN:
        return state
    case OTP:
        return{...state,user:action.payload}
    case AUTH_STATE:
        return{...state,user:action.payload}
    case LOG_OUT:
        return {...state,user:action.payload}
       
    default:
        return state
}
}

export default authReducer;