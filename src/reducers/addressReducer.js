import {ADD_ADDRES, GET_ADDRESS,UPDATE_ADDRESS,DELETE_ADDRESS} from '../actions/types'

const addAddress=(state=[],action)=>{
  switch (action.type) {
      case ADD_ADDRES:
         return state
      case GET_ADDRESS:
          return [...action.payload]
      case UPDATE_ADDRESS:
        return state
       case DELETE_ADDRESS:
         return state        
      default:
         return state
  }
}

export default addAddress;