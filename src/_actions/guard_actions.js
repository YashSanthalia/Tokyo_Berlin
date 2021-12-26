import { FETCH_GUARD, FETCH_GUARDS } from "./_types/guard_types";
import api from "../apis/main";

export const fetchGuards = () => async dispatch => {
    console.log(FETCH_GUARDS);
    const response = await api.get("/guards");

    dispatch({ type : FETCH_GUARDS, payload : response.data} );
}

export const fetchGuard = (formValues) => async dispatch => {
    console.log(FETCH_GUARD);
    const response = await api.get("/guards", formValues);

    dispatch({ type : FETCH_GUARD, payload : response.data });
}