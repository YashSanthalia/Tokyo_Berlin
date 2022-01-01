import { React, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { editWarden } from "../../_actions/warden_actions";
import WardenForm from "./WardenForm";
import ErrorModal from "../_utility_components/ErrorModal";

const EditWarden = (props) => {

    useEffect(() => {
        if(props.status.status === "Success") console.log(`Lets go to ${props.status.description}`);
    }, [props.status]);

    const onSubmit = (formValues) => {
        props.editWarden(props.warden.id, formValues);
    }

    return (
        <div>
            <h1>EDIT WARDEN</h1>
            <WardenForm initialValues={props.warden} onSubmit={onSubmit} />
            {props.status.status === "Error" ? <ErrorModal /> : null }
        </div>
    );

};

const mapStateToProps = (state) => {
    const id = window.location.pathname.split("/")[3];
    console.log(id);
    const warden = Object.values(state.wardens).filter((warden) => {
        return warden.id == id
    })
    return { warden : warden[0], status : state.status };
}

export default connect(mapStateToProps, { editWarden })(EditWarden);