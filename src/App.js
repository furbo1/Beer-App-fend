import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'
import BeerList from './components/BeerList/BeerList'
import BeerDetails from './components/BeerDetails/BeerDetails'
import NewBeer from './components/NewBeer/NewBeer'
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthService from '../src/services/auth.service'
import { withRouter} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header/>
          
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route  path="/beers" component={BeerList} />
            <Route  path="/addbeer" component={NewBeer} />
            <Route path="/beer/:beerId" component={BeerDetails}/> 
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);