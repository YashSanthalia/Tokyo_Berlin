import React from "react";
import { connect } from "react-redux";
import WardenTable from "./WardenTable";

const ShowWardens = (props) => {
    const wardens = Object.values(props.wardens);

    return (
        <div>
        <h2>List Of Wardens</h2>
        <WardenTable data = {wardens} rowsPerPage={8}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { wardens : state.wardens }
}

export default connect(mapStateToProps, {})(ShowWardens);