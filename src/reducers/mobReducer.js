import {NOT_SINGUPED} from '../actions/types'
const getNumber =(state={mobNo:null},action)=>{
    switch (action.type) {
        case NOT_SINGUPED:
        return{...state,mobNo:action.payload}
        default:
        return state;
    }
}

export default getNumber;