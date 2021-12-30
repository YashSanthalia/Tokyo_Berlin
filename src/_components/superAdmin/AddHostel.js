import React, { useEffect } from "react";
import HostelForm from "./HostelForm";
import { addHostel } from "../../_actions/hostel_actions";
import { connect } from "react-redux";


const AddHostel = (props) => {

    useEffect(() => {
        if(props.status.status === "Error") console.log(props.status);
        if(props.status.status === "Success") console.log(`Lets go to ${props.status.description}`);
    }, [props.status]);

    const onSubmit = (formValues) => {
        props.addHostel(formValues);
    }

    return (
        <div>
            <h1>ADD HOSTEL</h1>
            <HostelForm onSubmit={onSubmit} initialValues={ {status : "1"} }/>
        </div>
    );
    
};

const mapStateToProps = ( state ) => {
    return { status : state.status };
}

export default connect(mapStateToProps, { addHostel })(AddHostel);