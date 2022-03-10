import {ADD_REVIEW, GET_REVIEWS} from '../actions/types'

const addReviewReducer=(state=[],action)=>{
    switch (action.type) {
        case ADD_REVIEW:
            return state
        case GET_REVIEWS:
            return [...action.payload]    
        default:
            return state;
    }
}

export default addReviewReducer;