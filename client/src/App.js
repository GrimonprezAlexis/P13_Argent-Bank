import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store'
import Home from './components/Home/home'
import SignIn from './components/SignIn/signin'
import User from './components/User/user'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/user" component={User} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
