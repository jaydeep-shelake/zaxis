import { SHOW_OTP } from "../actions/types";

const otpReducer=(state={showOtp:false},action)=>{
    switch (action.type) {
        case SHOW_OTP:
            return{...state,showOtp:action.payload}
        default:
           return state
    }
}

export default otpReducer;