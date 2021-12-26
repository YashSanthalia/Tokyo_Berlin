import React from "react";
import { reduxForm, Field } from "redux-form";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Title from "../_utility_components/Title"
import InputField from "../_utility_components/InputField";
import { Button }  from "../_utility_components/Button";
import { fetchHostel } from "../../_actions/hostel_actions";
import { fetchStudent } from "../../_actions/student_actions";  
import { fetchGuard } from "../../_actions/guard_actions";
import { fetchCanteen } from "../../_actions/canteen_actions";

const LoginPage = (props) => {

  const params = useParams();

  const loginAs = params.loginAs;
  let titleText;

  if (loginAs == "students") titleText = "Student Login";
  else if (loginAs == "wardens") titleText = "Warden Login";
  else if (loginAs == "canteens") titleText = "Canteen Login";
  else if(loginAs === "guards") titleText = "Guard Login";

  const onSubmit = (formValues) => {
    if(loginAs === "students") props.fetchStudent(formValues);
    else if(loginAs === "wardens") props.fetchHostel(formValues);
    else if(loginAs === "guards") props.fetchGuard(formValues);
    else if(loginAs === "canteens") props.fetchCanteen(formValues);
  };

  
  return (
    <div>
      <Title text={titleText} />
      <form onSubmit={props.handleSubmit(onSubmit)} >

        <Field name="userName" component={InputField} label="Username" />
        <Field name="password" component={InputField} label="Password" />
        <Button text="Submit" />
      
      </form>
    </div>
  );

};


const validate = (formValues) => {
  const errors = {};
  if(!formValues.userName) errors.userName = "Enter a valid username";
  if(!formValues.password) errors.password = "Enter a valid password";
  return errors;
};

const formWrapped =  reduxForm({
  form : "LOGIN_FORM",
  validate : validate
})(LoginPage);

const actionCreators = {
  fetchHostel, fetchCanteen, fetchGuard, fetchStudent
};

export default connect( null, actionCreators )(formWrapped);