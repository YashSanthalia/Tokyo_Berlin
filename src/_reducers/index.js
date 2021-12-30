import { combineReducers } from "redux";
import { reducer } from "redux-form";
import canteenReducer from "./canteenReducer";
import guardReducer from "./guardReducer";
import hostelReducer from "./hostelReducer";
import studentReducer from "./studentReducer";
import loginReducer from "./loginReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
    form : reducer,
    loginTo : loginReducer,
    student : studentReducer,
    hostel : hostelReducer,
    guard : guardReducer,
    canteen : canteenReducer,
    status : statusReducer
});