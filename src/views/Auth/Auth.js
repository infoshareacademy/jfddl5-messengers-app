import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLoginClickAction,
    onLogOutAction
} from '../../state/auth'

import LoginByEmailAndPassword from './LoginByEmailAndPassword'
import { onLogInByGoogleClickHandler } from '../../state/logInGoogleAuth'
import RegisterUserForm from './RegisterUserForm'
import { onEmailSignUpChangeAction,onPasswordSignUpChangeAction,onSignUpClickAction } from '../../state/signUpAuth'

const styles = {  
    margin: "20px,40px,20px, 40px",
    padding: "20px",
    maxWidth: '40vw',
  }

  const toCenter = {
     position: 'absolute',
     right: '30vw',
     left: '30vw',
     top:'200px'
  }
  const stylesSpace = {
    padding: "20px"
  }

const Auth = (props) => (
    props._user ?
        <div>
        <RaisedButton onClick={props._onLogOutAction}
            >
                LOG OUT
        </RaisedButton>
            {props.children}
        </div>
        :
        <div style={toCenter}>
            <Paper style={styles} >
            <LoginByEmailAndPassword
                emailValue={props._emailValue}
                onEmailChange={props._onEmailChange}
                passwordValue={props._passwordValue}
                onPasswordChange={props._onPasswordChange}
                onLoginClick={props._onLoginClick}
                errorTextPassword={props._errorTextPasswordLogin}
                errorTextEmail={props._errorTextEmailLogin}

            />
        <div style={stylesSpace}>

        </div>
           
            <RaisedButton
                        label="Login by google"
                        primary={true}
                        onClick={props._onLogInByGoogleClickHandler}
                    />
            </Paper>
            <Paper style={styles} >
             <RegisterUserForm
                onClickAction={props._onSignUpClickAction}
                onPasswordChangeAction={props._onPasswordSignUpChangeAction}
                onEmailChangeAction={props._onEmailSignUpChangeAction}
                passwordValue={props._passwordSignUp}
                emailValue={props._emailSignUp}
                errorTextPassword={props._errorTextPasswordSignUp}
                errorTextEmail={props._errorTextEmailSignUp}
                label={"Sign Up"}
          />
          </Paper>
        </div>
        
         
)
const mapStateToProps = state => ({
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password,
    _user: state.auth.user,

    _emailSignUp: state.signUpAuth.emailSignUp,
    _passwordSignUp: state.signUpAuth.passwordSignUp,
    _errorTextEmailSignUp: state.signUpAuth.errorTextEmailSignUp,
    _errorTextPasswordSignUp: state.signUpAuth.errorTextPasswordSignUp,

    _errorTextPasswordLogin: state.auth.errorTextPasswordLogin,
    _errorTextEmailLogin: state.auth.errorTextEmailLogin,

})

const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
    _onLoginClick: () => dispatch(onLoginClickAction()),
    _onLogOutAction: () => dispatch(onLogOutAction()),

    _onLogInByGoogleClickHandler: () => dispatch(onLogInByGoogleClickHandler()),

    _onEmailSignUpChangeAction: event => dispatch(onEmailSignUpChangeAction(event.target.value)),
    _onPasswordSignUpChangeAction: event => dispatch(onPasswordSignUpChangeAction(event.target.value)),
    _onSignUpClickAction: () => dispatch(onSignUpClickAction()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)