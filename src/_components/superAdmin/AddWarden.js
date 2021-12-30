import React from "react";
import { connect } from "react-redux";

import WardenForm from "./WardenForm";
import { addWarden } from "../../_actions/warden_actions";

const AddWarden = (props) => {

    const onSubmit = (formValues) => {
        props.addWarden(formValues);
    }

    return (
        <div>
            <h1>ADD WARDEN</h1>
            <WardenForm onSubmit={onSubmit} />
        </div>
    );

};

export default connect( null, { addWarden } )(AddWarden);