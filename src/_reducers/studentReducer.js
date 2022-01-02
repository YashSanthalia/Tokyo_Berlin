import { EDIT_STUDENT, FETCH_STUDENT, FETCH_STUDENTS } from "../_actions/_types/student_types";
import _ from "lodash";

export default(state = {}, action) => {
    switch(action.type){
        case FETCH_STUDENT  : return { ...state, [action.payload.registrationNumber] : action.payload };
        case FETCH_STUDENTS : return { ...state, ..._.mapKeys(action.payload, "registrationNumber")};
        case EDIT_STUDENT   : return {...state, [action.payload.id] : action.payload };
        default : return state;
    }
}