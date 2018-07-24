import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import MessagesView from './MessagesView'
import LastMessagesView from './LastMessagesView'
import FindMessagesView from './FindMessagesView'
import FavouritesMessagesView from './FavouritesMessagesView'
import ContactsView from './ContactsView'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppBar
              title={'Messengers'}
            />

            <Route path={'/contacts'} component={ContactsView} />
            <Route path={'/messages'} component={MessagesView} />
            <Route path={'/last-messages'} component={LastMessagesView} />
            <Route path={'/find-messages'} component={FindMessagesView} />
            <Route path={'/favourite-messages'} component={FavouritesMessagesView} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
