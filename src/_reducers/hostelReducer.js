import _ from "lodash";
import { FETCH_HOSTEL, FETCH_HOSTELS } from "../_actions/_types/hostel_types";

export default(state = {}, action) => {
    switch(action.type){
        case FETCH_HOSTEL  : return { ...state, [action.payload.nameOfHostel] : action.payload };
        case FETCH_HOSTELS : return { ...state, ..._.mapKeys(action.payload, "nameOfHostel") };
        default            : return state;
    }
}