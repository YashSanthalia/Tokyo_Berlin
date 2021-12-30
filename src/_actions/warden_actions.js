import { ADD_WARDEN, FETCH_WARDENS } from "./_types/warden_types";
import api from "../apis/main";

export const addWarden = (formValues) => async dispatch => {
    console.log(ADD_WARDEN);
    console.log(formValues);
    const response = await api.post("/wardens", formValues);

    dispatch({ type : ADD_WARDEN, payload : response.data });
}

export const fetchWardens = () => async dispatch => {
    const response = await api.get("/wardens");

    dispatch({ type : FETCH_WARDENS, payload : response.data });
}