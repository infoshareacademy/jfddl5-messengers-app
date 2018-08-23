import { auth as firebaseAuth, database } from '../firebaseConfig'
import { startChannelSync } from './messageView'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/SET_USER'
export const CLEAR_STATE = "auth/CLEAR_STATE"
const EMPTY_EMAIL_FIELD = "logInAuth/EMPTY_EMAIL_FIELD";
const EMPTY_PASSWORD_FIELD = "logInAuth/EMPTY_PASSWORD_FIELD";

export const onEmailChangeAction = value => ({ type: EMAIL_CHANGE, value })
export const onPasswordChangeAction = value => ({ type: PASSWORD_CHANGE, value })
export const setUserAction = user => ({ type: SET_USER, user })

export const clearStateAction = () => ({ type: CLEAR_STATE });

export const onEmptyEmailClick = () => ({ type: EMPTY_EMAIL_FIELD });

export const onEmptyPasswordClick = () => ({ type: EMPTY_PASSWORD_FIELD });

export const initAuthStateListening = () => (dispatch, getState) => {
    firebaseAuth.onAuthStateChanged(user => {
        dispatch(setUserAction(user))
        if (user) {
            dispatch(startChannelSync())
            dispatch(logUserLogIn())
            //here is a good place to dispatch after login actions
        } else {
            //here is good place to dispatch after logOut actions
        }

    })
}

export const logUserLogIn = () => (dispatch, getState) => {
    database.ref(`userLogIns`).push({
        timestamp: Date.now(),
        userId: getState().auth.user.uid
    })
}
export const onLogOutAction = () => (dispatch, getState) => {
    firebaseAuth.signOut()
        .then(() => console.log('SIGN OUT OK'))
        .catch(() => console.log('SIGN OUT ERROR'))
}
export const onLoginClickAction = () => (dispatch, getState) => {
    const state = getState()
    if(state.auth.email === ''){
        dispatch(onEmptyEmailClick())
    }
    if( state.auth.password === ''){
        dispatch(onEmptyPasswordClick())
    }
    firebaseAuth.signInWithEmailAndPassword(
        state.auth.email,
        state.auth.password)
        .then(() => console.log('LOGIN OK'))
        .catch(function (error) {
            const errorMessage = error.message;
            alert(errorMessage)
        })
}
const initialState = {
    email: '',
    password: '',
    user: null,
    logUserLogIn: '',
    errorTextEmailLogin: "",
    errorTextPasswordLogin: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case EMPTY_EMAIL_FIELD:
            return {
                ...state,
                errorTextEmailLogin: "This field is required to login!"
            };
        case EMPTY_PASSWORD_FIELD:
            return {
                ...state,
                errorTextPasswordLogin: "This field is required to login!"
            };
        case CLEAR_STATE:
            return initialState;
        default:
            return state
    }
} 