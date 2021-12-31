import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import {CHECK_IN_CHECK_OUT,STUDENT_OUTSIDE} from "../_constants/guard_constants";

const guardPage = (props) => {
    
    return (
        <div>
            <h1>Hostel Name</h1>
            <Link to = "/guards/:hostelName/Check_In_Check_Out">
                <Button text = {CHECK_IN_CHECK_OUT} />
            </Link>
            <Link to = "/guards/:hostelName/studentOutisde">
                <Button text = {STUDENT_OUTSIDE} />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, {} )(guardPage);