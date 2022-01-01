import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

import Title from "../_utility_components/Title"
import InputField from "../_utility_components/InputField";
import { Button }  from "../_utility_components/Button";
import { loginHostel } from "../../_actions/hostel_actions";
import { loginStudent } from "../../_actions/student_actions";  
import { loginGuard } from "../../_actions/guard_actions";
import { loginCanteen } from "../../_actions/canteen_actions";
import { resetLoginTo } from "../../_actions/utility_actions";

const LoginPage = (props) => {

  const navigate = useNavigate();
  const params = useParams();
  const loginAs = params.loginAs;

  useEffect(() => {
    if(_.isEmpty(props.loginTo)) return;
    if(props.loginTo === "error"){
      console.log("Error Detected");
    }
    else if(loginAs === "students") {
      console.log("Student Detected");
      navigate(`/students/${props.loginTo}`);
    }
    else if(loginAs === "wardens") {
      if(props.loginTo === "superadmin") navigate("/superadmin");
      else navigate(`/hostels/${props.loginTo}`);
    }
    else if(loginAs === "canteens") console.log("Canteen Detected");
    else if(loginAs === "guards") console.log("Guard Detected");
    props.resetLoginTo();

  }, [props.loginTo, loginAs]);


  let titleText;

  if (loginAs == "students") titleText = "Student Login";
  else if (loginAs == "wardens") titleText = "Warden Login";
  else if (loginAs == "canteens") titleText = "Canteen Login";
  else if(loginAs === "guards") titleText = "Guard Login";

  const onSubmit = (formValues) => {
    if(loginAs === "students") props.loginStudent(formValues);
    else if(loginAs === "wardens") props.loginHostel(formValues);
    else if(loginAs === "guards") props.loginGuard(formValues);
    else if(loginAs === "canteens") props.loginCanteen(formValues);
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
  loginHostel, loginCanteen, loginGuard, loginStudent, resetLoginTo
};

const mapStateToProps = (state) => {
  return { loginTo : state.loginTo };
}

export default connect( mapStateToProps, actionCreators )(formWrapped);