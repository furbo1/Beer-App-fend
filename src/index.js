import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { BrowserRouter as Router, Switch, Link, Redirect ,Route } from "react-router-dom";
import Home from './components/Home/Home';
import BeerList from './components/BeerList/BeerList';
import BeerDetails from './components/BeerDetails/BeerDetails';
import NewBeer from './components/NewBeer/NewBeer';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword"
import { isAuthenticated} from '../src/services/auth.service';
import PasswordChange from './components/PasswordChange/PasswordChange';
import AuthService from '../src/services/auth.service';


function hasPermission(routePermissions) {
  let userHasPermission = false;
  if(routePermissions.length > 0) {
    routePermissions.forEach(permission => {
      if(AuthService.hasPermission(permission)) {
        userHasPermission = true;
      }
    })
  }else {
    userHasPermission = true;
  }
  
  return userHasPermission;

}

const PrivateRoute = ({ component: Component, ...rest }) => (

  

  <Route
    {...rest}
    render={props => 
      isAuthenticated() && hasPermission(props) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/signin" , state: { from: props.location } }} /> 
      )

    }
  />
);

ReactDOM.render( 
    <Router>
        <App>
            <Switch>
                <PrivateRoute exact path="/" permissions='BUSINESS, CLIENT' component={Home} />
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Register} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/password-change" component={PasswordChange} />
                <PrivateRoute  path="/beers" permissions='BUSINESS, CLIENT' component={BeerList} />
                <PrivateRoute  path="/addbeer"  permissions='BUSINESS' component={NewBeer} />
                <PrivateRoute path="/beer/:beerId" permissions='BUSINESS, CLIENT'component={BeerDetails}/> 
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();