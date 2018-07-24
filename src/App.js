import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <AppBar
            title={'Messengers'}
          />
        </Router>
      </div>
    );
  }
}

export default App;
