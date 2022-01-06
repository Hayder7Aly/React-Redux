import { BUY_STAR_BUCKS } from "./starBuckTypes"



const initialState = {
    numOfStarBucks : 35
}

const starBuckReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_STAR_BUCKS: return {...state, numOfStarBucks : state.numOfStarBucks - 1}
        default: return state
    }
}

export default starBuckReducer;