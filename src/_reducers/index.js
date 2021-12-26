import { combineReducers } from "redux";
import { reducer } from "redux-form";
import canteenReducer from "./canteenReducer";
import guardReducer from "./guardReducer";
import hostelReducer from "./hostelReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
    form : reducer,
    student : studentReducer,
    hostel : hostelReducer,
    guard : guardReducer,
    canteen : canteenReducer
});