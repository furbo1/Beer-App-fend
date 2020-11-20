import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'
import BeerList from './components/BeerList/BeerList'
import BeerDetails from './components/BeerDetails/BeerDetails'
import NewBeer from './components/NewBeer/NewBeer'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Signup";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route  path="/beers" component={BeerList} />
      <Route  path="/addbeer" component={NewBeer} />
      <Route path="/beer/:beerId" component={BeerDetails}/>
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={SignUp} />
        



    </div>
  );
}

export default App;