import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import MessagesView from './MessagesView'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppBar
              title={'Messengers'}
            />

            <Route path={'/messages'} component={MessagesView} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
