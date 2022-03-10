import {CART_TOTAL} from '../actions/types'

const totalPriceReducer=(state={total:0},action)=>{
    switch (action.type) {
        case CART_TOTAL:
          return {...state,total:action.payload} 
        default:
            return state
    }
}

export default totalPriceReducer