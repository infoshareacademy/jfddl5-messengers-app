import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import navigation from './state/navigation'
import channels, { initChannelsSync } from './state/channels'

const reducer = combineReducers({
    navigation,
    channels
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initChannelsSync())