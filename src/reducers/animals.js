import { ADD_ANIMAL } from "../actions/actionTypes";


export default function animals(state = { animals: [] }, action) {
    switch (action.type) {
        case ADD_ANIMAL:
            return [ ...state, action.animal]
        default:
            return state
    }
}