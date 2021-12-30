import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";

import { fetchHostels } from "../../_actions/hostel_actions";
import { Button } from "../_utility_components/Button";
import { ADD_HOSTEL, ADD_WARDEN } from "../_constants/super_admin_constants";

const SuperAdminPage = (props) => {

    useEffect(() => {
        props.fetchHostels();
    }, []);

    return (
        <div>
            <h1>Super Admin Page</h1>
            <Link to = "/superAdmin/addHostel">
                <Button text = {ADD_HOSTEL} />
            </Link>
            <Link to = "/superAdmin/addWarden">
                <Button text = {ADD_WARDEN} />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, { fetchHostels } )(SuperAdminPage);