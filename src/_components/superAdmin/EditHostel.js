import { React, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { editHostel } from "../../_actions/hostel_actions";
import HostelForm from "./HostelForm";
import ErrorModal from "../_utility_components/ErrorModal";

const EditHostel = (props) => {

    useEffect(() => {
        if(props.status.status === "Success") console.log(`Lets go to ${props.status.description}`);
    }, [props.status]);

    const onSubmit = (formValues) => {
        props.editHostel(props.hostel.id, formValues);
    }

    return (
        <div>
            <h1>EDIT HOSTEL</h1>
            <HostelForm initialValues={props.hostel} onSubmit={onSubmit} />
            { props.status.status === "Error" ? <ErrorModal /> : null }
        </div>
    );

};

const mapStateToProps = (state) => {
    const id = window.location.pathname.split("/")[3];
    const hostel = Object.values(state.hostel).filter((hostel) => {
        return hostel.id == id
    })
    return { hostel : hostel[0], status : state.status };
}

export default connect(mapStateToProps, { editHostel })(EditHostel);