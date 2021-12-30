import { LOGIN_STUDENT, LOGIN_HOSTEL, LOGIN_GUARD, LOGIN_CANTEEN, RESET_LOGIN_TO } from "../_actions/_types/login_types";

export default(state = {}, action) => {
    switch(action.type){
        case LOGIN_HOSTEL :  return action.payload;
        case LOGIN_CANTEEN : return action.payload;
        case LOGIN_GUARD : return action.payload;
        case LOGIN_GUARD : return action.payload;
        case RESET_LOGIN_TO : return action.payload;
        default : return state;
    }
};