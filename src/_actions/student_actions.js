import { FETCH_STUDENTS } from "./_types/student_types";
import { LOGIN_STUDENT } from "./_types/login_types";

import api from "../apis/main";

export const loginStudent = (formValues) => async dispatch => {
    console.log(LOGIN_STUDENT);
    const response = await api.get("/students", formValues);

    dispatch({ type : LOGIN_STUDENT, payload : response.data });
}

export const fetchStudents = () => async dispatch => {
    console.log(FETCH_STUDENTS);
    const response = await api.get("/students");

    dispatch({ type : FETCH_STUDENTS, payload : response.data });
}


export const fetchStudentByRegistrationNumber = (registrationNumber) => async dispatch => {
    const response = await api.get(`/students/${registrationNumber}`);
    
    dispatch({ type : LOGIN_STUDENT, payload : response.data });
} 
