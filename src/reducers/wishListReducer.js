
import {ADD_SINGLE_ADDRESS} from '../actions/types'
const wishListReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_SINGLE_ADDRESS:
          return {...state,whislist:action.payload}
        default:
        return state
    }
}
export default wishListReducer