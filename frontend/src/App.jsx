import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import SignIn from './pages/Login/Signin';
import User from './pages/User/User';

import { getUser } from './services/userService';
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
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/user" component={User} />
        <Route component={Error}/>
      </Switch>
    )
}
export default App
