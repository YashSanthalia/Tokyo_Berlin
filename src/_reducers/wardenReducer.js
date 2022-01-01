import { ADD_WARDEN, FETCH_WARDENS, UPDATE_WARDEN } from "../_actions/_types/warden_types";
import _ from "lodash";

export default ( state = {}, action ) => {

    switch(action.type){
        case ADD_WARDEN : return { ...state, [action.payload.id] : action.payload };
        case FETCH_WARDENS : return { ...state, ..._.mapKeys(action.payload, "id") };
        case UPDATE_WARDEN : return { ...state, [action.payload.id] : action.payload };
        default : return state;
    }

} 