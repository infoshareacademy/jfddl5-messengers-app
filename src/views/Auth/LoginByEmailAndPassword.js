import React from 'react'
import Paper from 'material-ui/Paper'

const LoginByEmailAndPassword = (props) => (

    <div>
    <Paper>
        <div>
            <input type="email" 
            value={props.emailValue}
            onChange={props.onEmailChange}
            />
        </div>
        <div>
            <input type="password" 
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            />
        </div>
        <div>
            <button
            onClick={props.onLoginClick}>
                LOGIN!
            </button>
        </div>
        </Paper>
    </div>
)


export default LoginByEmailAndPassword