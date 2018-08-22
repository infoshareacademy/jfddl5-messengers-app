import React from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from 'material-ui/Paper'

const RegisterUserForm = props => (
  <div>
    <Paper>
      <h1>{props.label}</h1>
      <div>
        <TextField
          floatingLabelText="enter your e-mail here"
          value={props.emailValue}
          type={"email"}
          errorText={props.errorTextEmail}
          onChange={props.onEmailChangeAction}
        />
      </div>
      <div>
        <TextField
          floatingLabelText="Write your password here"
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
    </Paper>
  </div>
);

export default RegisterUserForm;
