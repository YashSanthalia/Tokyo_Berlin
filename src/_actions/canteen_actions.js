import { FETCH_CANTEEN, FETCH_CANTEENS } from "./_types/canteen_types";
import api from "../apis/main";


export const fetchCanteens = () => async dispatch => {
    console.log(FETCH_CANTEENS);
    const response = await api.get("/canteens");

    dispatch({ type : FETCH_CANTEENS, payload : response.data} );
}

export const fetchCanteen = (formValues) => async dispatch => {
    console.log(FETCH_CANTEEN);
    const response = await api.get("/canteens", formValues);

    dispatch({ type : FETCH_CANTEEN, payload : response.data });
}