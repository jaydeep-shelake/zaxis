import {ADD_TO_CART,GET_CART,DELETE_CART_ITEM, UPDATE_CART_QUANITY} from '../actions/types'

const cartReducer=(state=[],action)=>{
    switch (action.type) {
        case ADD_TO_CART:
             return state
        case DELETE_CART_ITEM:
            return state
        case UPDATE_CART_QUANITY:
            return state         
        case GET_CART:
            return[...action.payload]     
        default:
             return state
    }
}
export default cartReducer;