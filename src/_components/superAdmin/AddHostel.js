import React, { useEffect } from "react";
import { connect } from "react-redux";

import HostelForm from "./HostelForm";
import { addHostel } from "../../_actions/hostel_actions";
import ErrorModal from "../_utility_components/ErrorModal";
import { resetStatus } from "../../_actions/utility_actions";


const AddHostel = (props) => {

    useEffect(() => {
        if(props.status.status === "Success") console.log(`Lets go to ${props.status.description}`);
    }, [props.status]);

    const onSubmit = (formValues) => {
        props.addHostel(formValues);
    }

    return (
        <div>
            <h1>ADD HOSTEL</h1>
            <HostelForm onSubmit={onSubmit} initialValues={ {status : "1"} }/>
            { props.status.status === "Error" ? <ErrorModal /> : null }
        </div>
    );
    
};

const mapStateToProps = ( state ) => {
    return { status : state.status };
}

export default connect(mapStateToProps, { addHostel, resetStatus })(AddHostel);