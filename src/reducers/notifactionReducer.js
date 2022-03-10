import {MSG} from '../actions/types'
const notificationReducer=(state={msg:'',err:false},action)=>{
    switch (action.type) {
        case MSG:
            return{...state,msg:action.payload.msg,err:action.payload.err}
        default:
            return state;
    }
}

export default notificationReducer;