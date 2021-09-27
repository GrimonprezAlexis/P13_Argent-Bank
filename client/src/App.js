import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/Home/home';
import SignIn from './components/SignIn/signin';
import User from './components/User/user';
import { getUser } from './services/user-service';
import { GET_USER_PROFILE } from './store/actions/constants';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const jwt = useSelector(state => state.user.jwt);

    useEffect(() => {
      if (dispatch && jwt) {
        getUser(jwt).then(user => {
          dispatch({
              type: GET_USER_PROFILE,
              payload: user.data.body
          });
        });
      }
      if (!jwt) localStorage.removeItem('jwt');
    }, [dispatch, jwt]);

    
    useEffect(() => {
        if (history && jwt) {         
            history.push('/user');
        }
    }, [history, jwt]);

    useEffect(() => {
        if ( jwt) {
            localStorage.setItem('jwt', jwt);  
        }
    }, [jwt]);
  
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user" component={User} />
      </Switch>
    )
}
export default App
