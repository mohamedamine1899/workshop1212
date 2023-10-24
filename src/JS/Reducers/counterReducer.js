import {ADD_MOVIE} from "../Constants/actions-types"
import m from "../../assests/m"
const initialState = {
    movies:m 
        
        
        
    
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                movies: [...state.movies, action.payload]
            }
        default:
            return state
    }
}

export default counterReducer ;