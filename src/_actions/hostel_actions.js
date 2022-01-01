import _ from "lodash";

import { ADD_HOSTEL, EDIT_HOSTEL, FETCH_HOSTELS } from "./_types/hostel_types";
import { LOGIN_HOSTEL } from "./_types/login_types";
import api from "../apis/main";

export const loginHostel = (formValues) => async dispatch => {
    const response = await api.get(`/hostels/${formValues.userName}/${formValues.password}`);
    dispatch({type : LOGIN_HOSTEL, payload : response.data});
}

export const fetchHostels = () => async dispatch => {
    const response = await api.get("/hostels");
    dispatch({ type : FETCH_HOSTELS, payload : response.data} );
}

export const addHostel = (formValues) => async dispatch => {
    const response = await api.post("/hostels", formValues);
    if(_.isEmpty(response.data)) {
         dispatch({ type : "STATUS", payload : { status:"Error", description : "A hostel with same name already exists." } }); 
         return; 
    }
    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : ADD_HOSTEL, payload : response.data });
}

export const editHostel = (id, formValues) => async dispatch => {
    const response = await api.patch(`/hostels/${id}`, formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A hostel with same name already exists." } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : EDIT_HOSTEL, payload : response.data });
}
