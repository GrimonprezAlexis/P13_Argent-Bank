import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import SignIn from './components/SignIn/signin';
import User from './components/User/user';
import { getUser } from './services/user-service';
import { USER_LOGIN } from './store/actions/constants';

const App = () => {
 const dispatch = useDispatch();

    useEffect(() => {
      getUser().then(user => {
        dispatch({
            type: USER_LOGIN,
            payload: user.data.body
        });
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/user" component={User} />
        </Switch>
      </Router>
    )
}
export default App
