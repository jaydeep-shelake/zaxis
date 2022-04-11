
import {ADD_SINGLE_ADDRESS, ADD_TO_WHISLIST, DELETE_WISHLIST, GET_WISHLIST} from '../actions/types'
const wishListReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_SINGLE_ADDRESS:
          return {...state,whislist:action.payload}
        default:
        return state
    }
}
export default wishListReducer

export const getWishlistReducer =(state=[],action)=>{
  switch (action.type) {
    case ADD_TO_WHISLIST:
      return [...state,action.payload]
    case GET_WISHLIST:
      return action.payload;
    case DELETE_WISHLIST:
      const id = action.payload
      return state.filter(item=>item.id!==id)
    default:
      return state;
  }
}