import { CANCEL_ORDER, GET_ORDERS, PLACE_ORDER } from "../actions/types";

const orderReducer=(state=[],action)=>{
    switch (action.type) {
        case PLACE_ORDER:
            return state
        case GET_ORDERS:
            return [...action.payload]
        case CANCEL_ORDER:
            return state        
        default:
            return state
    }
}

export default orderReducer