import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import {ADD_STUDENT,EDIT_STUDENT,ALL_STUDENTS,COMPLAINTS} from "../_constants/hostel_constants";

const hostelPage = (props) => {
    
    return (
        <div>
            <h1>Hostel Name</h1>
            <Link to = "/hostels/:hostelName/addStudent">
                <Button text = {ADD_STUDENT} />
            </Link>
            <Link to = "/hostels/:hostelName/allStudents">
                <Button text = {ALL_STUDENTS} />
            </Link>
            <Link to = "/hostels/:hostelName/editStudent">
                <Button text = {EDIT_STUDENT} />
            </Link>
            <Link to = "/hostels/:hostelName/complaints">
                <Button text = {COMPLAINTS} />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, {} )(hostelPage);