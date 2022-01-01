import { React, useEffect } from "react";
import { connect } from "react-redux";

import WardenForm from "./WardenForm";
import { addWarden } from "../../_actions/warden_actions";
import ErrorModal from "../_utility_components/ErrorModal";

const AddWarden = (props) => {

    useEffect(() => {
        if(props.status.status === "Success") console.log(`Lets go to ${props.status.description}`);
    }, [props.status]);

    const onSubmit = (formValues) => {
        props.addWarden(formValues);
    }

    return (
        <div>
            <h1>ADD WARDEN</h1>
            <WardenForm onSubmit={onSubmit} initialValues={{hostelName : "svbh"}}/>
            { props.status.status === "Error" ? <ErrorModal /> : null }
        </div>
    );

};


const mapStateToProps = ( state ) => {
    return { status : state.status };
}

export default connect( mapStateToProps, { addWarden } )(AddWarden);