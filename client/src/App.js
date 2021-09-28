import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/Signin';
import User from './components/User';
import { getUser } from './services/user-service';
import { GET_USER_PROFILE } from './store/actions/constants';



const App = () => {      
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  useEffect(() => {
        if (jwt) {
            getUser(jwt).then(user => {
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: user
                });
            });
        }
  }, [dispatch, jwt]);
  
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user" component={User} />
      </Switch>
    )
}
export default App
