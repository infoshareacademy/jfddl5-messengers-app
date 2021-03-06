import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FindMessagesView from './views/FindMessagesView'
import FavouritesMessagesView from './views/FavouritesMessagesView'
import Navigation from './views/Navigation'
import ChannelsView from './views/ChannelsView';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
            <Route exact path={'/'} component={() => (
              <ChannelsView
                match = {{
                  params: {
                    id: '-LJUAF34bUu4jb-xz4wl'
                  }
                }}
              />
            )} />
            <Route path={'/find-messages'} component={FindMessagesView} />
            <Route path={'/favourite-messages'} component={FavouritesMessagesView} />
            <Route path={'/channels/:id'} component={ChannelsView} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
