import {SHOW_CART} from '../actions/types'

const showCartReducer=(state={showcart:false},action)=>{
switch (action.type) {
    case SHOW_CART:
        return {...state,showcart:action.payload}
    default:
        return state
}
}

export default showCartReducer;