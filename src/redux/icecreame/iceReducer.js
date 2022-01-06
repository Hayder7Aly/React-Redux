import { BUY_ICE } from "./iceTypes"




const initialState = {
    numOfIceCreame : 25
}

const iceReducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_ICE: return {...state, numOfIceCreame : state.numOfIceCreame - action.payload}
        default : return state
    }
}


export default iceReducer;