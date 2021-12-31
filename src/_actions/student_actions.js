import { ADD_STUDENT, FETCH_STUDENTS } from "./_types/student_types";
import { LOGIN_STUDENT } from "./_types/login_types";

import api from "../apis/main";

export const loginStudent = (formValues) => async dispatch => {
    console.log(LOGIN_STUDENT);
    const response = await api.get(`/students/${formValues.userName}/${formValues.password}`);

    dispatch({ type : LOGIN_STUDENT, payload : response.data });
}

export const fetchStudents = () => async dispatch => {
    console.log(FETCH_STUDENTS);
    
    dispatch({ type : FETCH_STUDENTS, payload : response.data });
}

export const addStudent = (formValues) => async dispatch => {
    console.log(ADD_STUDENT);
    console.log(formValues);
    const response = await api.post("/students", formValues);

    dispatch({ type : ADD_STUDENT, payload : response.data });
}

export const fetchStudentByRegistrationNumber = (registrationNumber) => async dispatch => {
    const response = await api.get(`/students/${registrationNumber}`);
    
    dispatch({ type : LOGIN_STUDENT, payload : response.data });
} 
