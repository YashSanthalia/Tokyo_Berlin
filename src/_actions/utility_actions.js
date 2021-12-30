import { RESET_LOGIN_TO } from "./_types/login_types";

export const resetLoginTo = () => async dispatch => {

    dispatch( { type : RESET_LOGIN_TO, payload : {} } );

} 