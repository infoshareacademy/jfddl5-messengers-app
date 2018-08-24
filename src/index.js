import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { store } from './store'
import { Provider } from 'react-redux'
import Auth from './views/Auth/Auth'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth>
                <App />
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)


