import React from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


const RegisterUserForm = props => (
  <div>
    
      <h2>{props.label}</h2>
      <div>
        <TextField
          hintText="enter your e-mail here to sign up"
          value={props.emailValue}
          type={"email"}
          errorText={props.errorTextEmail}
          onChange={props.onEmailChangeAction}
        />
      </div>
      <div>
        <TextField
          hintText="write your password here to sign up"
          value={props.passwordValue}
          type={"password"}
          errorText={props.errorTextPassword}
          onChange={props.onPasswordChangeAction}
        />
      </div>
      <div>
        <RaisedButton
          label={props.label}
          primary={true}
          onClick={props.onClickAction}
        />
      </div>
    
  </div>
)

export default RegisterUserForm;
