import { combineReducers } from "redux"
import cakeReducer from "./cakes/cakeReducer"
import iceReducer from "./icecreame/iceReducer"
import starBuckReducer from "./starbuck/starBuckReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCreame : iceReducer, 
    starBuck : starBuckReducer,
    user : userReducer

})

export default rootReducer;