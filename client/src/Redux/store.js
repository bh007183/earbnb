
import {combineReducers} from "redux"
import searchReducer from "./externalApiActions"


export default combineReducers({
    Results: searchReducer
})