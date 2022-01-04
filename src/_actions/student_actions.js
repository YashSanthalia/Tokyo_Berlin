import _ from "lodash";
import { ADD_STUDENT, EDIT_STUDENT, FETCH_STUDENTS,RESET_STUDENTS } from "./_types/student_types";
import { LOGIN_STUDENT } from "./_types/login_types";

import api from "../apis/main";

export const loginStudent = (formValues) => async dispatch => {
    console.log(LOGIN_STUDENT);
    const response = await api.get(`/students/${formValues.userName}/${formValues.password}`);

    dispatch({ type : LOGIN_STUDENT, payload : response.data });
}

export const fetchStudents = () => async dispatch => {
    console.log(FETCH_STUDENTS);
    const response = await api.get("/students");
    
    dispatch({ type : FETCH_STUDENTS, payload : response.data });
}

export const addStudent = (formValues) => async dispatch => {
    console.log(ADD_STUDENT);
    console.log(formValues);
    const response = await api.post("/students", formValues);

    dispatch({ type : ADD_STUDENT, payload : response.data });
}

export const editStudent = (id, formValues) => async dispatch => {
    const response = await api.patch(`/students/${id}`, formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A student with same registration number already exists." } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : EDIT_STUDENT, payload : response.data });
}

export const fetchStudentByRegistrationNumber = (registrationNumber) => async dispatch => {
    const response = await api.get(`/students/${registrationNumber}`);
    
    dispatch({ type : LOGIN_STUDENT, payload : response.data });
}

export const resetStudents = () => async dispatch => {
    dispatch ({ type : RESET_STUDENTS, payload : {} });
}
