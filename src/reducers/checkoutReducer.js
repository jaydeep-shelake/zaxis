
import {CHECKOUT} from '../actions/types'
const checkout =(state={},action)=>{
   switch (action.type) {
      case CHECKOUT:
         return {...state,checkout:action.payload}
   
      default:
         return state
   }
}

export default checkout