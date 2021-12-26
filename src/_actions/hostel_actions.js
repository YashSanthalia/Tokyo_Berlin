import { FETCH_HOSTEL, FETCH_HOSTELS } from "./_types/hostel_types";
import api from "../apis/main";
import { useNavigate } from "react-router-dom";

export const fetchHostels = () => async dispatch => {
    console.log(FETCH_HOSTELS);
    const response = await api.get("/hostels");

    dispatch({ type : FETCH_HOSTELS, payload : response.data} );
}

export const fetchHostel = (formValues) => async dispatch => {
    console.log(FETCH_HOSTEL);
    const response = await api.get("/hostels", formValues);
    console.log("yash");
    const navigate = useNavigate();
    navigate("/");
    dispatch({ type : FETCH_HOSTEL, payload : response.data });
}