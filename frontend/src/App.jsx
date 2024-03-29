import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import SignIn from './pages/Login/Login';
import User from './pages/User/User';

import { getUser } from './services/userService';
import { GET_USER_PROFILE } from './store/actions/constants';



const App = () => {      
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.user.jwt) || localStorage.getItem('jwt');

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
      <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/user" component={User} />
        <Route component={Error}/>
      </Switch>
      </div>
    )
}
export default App
