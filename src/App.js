import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import MessengersPaper from './components/MessengersPaper'
import MessagesView from './views/MessagesView'
import LastMessagesView from './views/LastMessagesView'
import FindMessagesView from './views/FindMessagesView'
import FavouritesMessagesView from './views/FavouritesMessagesView'
import ContactsView from './views/ContactsView'
import SideBar from './Navigation/SideBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppBar
              title={'Messengers'}
            />
            <SideBar

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
