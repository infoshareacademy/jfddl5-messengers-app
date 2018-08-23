import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton"



const LoginByEmailAndPassword = (props) => (


    <div>
        <h2>Login here</h2>
        <div>
            <TextField
                type="email"
                hintText="write your email here"
                value={props.emailValue}
                onChange={props.onEmailChange}
                errorText={props.errorTextEmail}
            />

        </div>
        <div>
            <TextField
                type="password"
                hintText="write your password here"
                value={props.passwordValue}
                onChange={props.onPasswordChange}
            />

        </div>
        <div>
            <RaisedButton
                label="LOGIN"
                primary={true}
                onClick={props.onLoginClick}>

            </RaisedButton>
        </div>
    </div>

)


export default LoginByEmailAndPassword