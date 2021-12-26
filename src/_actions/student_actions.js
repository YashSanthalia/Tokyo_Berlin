import { FETCH_STUDENTS, FETCH_STUDENT } from "./_types/student_types";
import api from "../apis/main";

export const fetchStudents = () => async dispatch => {
    console.log(FETCH_STUDENTS);
    const response = await api.get("/students");

    dispatch({ type : FETCH_STUDENTS, payload : response.data });
}

export const fetchStudent = (formValues) => async dispatch => {
    console.log(FETCH_STUDENT);
    const response = await api.get("/students", formValues);

    dispatch({ type : FETCH_STUDENT, payload : response.data });
}

export const fetchStudentByRegistrationNumber = (registrationNumber) => async dispatch => {
    const response = await api.get(`/students/${registrationNumber}`);

    dispatch({ type : FETCH_STUDENT, payload : response.data });
} 
