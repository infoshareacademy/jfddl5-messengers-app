import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import navigation from './state/navigation'
import channels, { initChannelsSync } from './state/channels'
import auth, {initAuthStateListening} from './state/auth'
import messageView from './state/messageView'
import sideBar from './state/sideBar'
import signUpAuth from './state/signUpAuth'

const reducer = combineReducers({
    navigation,
    channels,
    messageView,
    auth,
    signUpAuth,
    sideBar
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
store.dispatch(initAuthStateListening()) 
store.dispatch(initChannelsSync())