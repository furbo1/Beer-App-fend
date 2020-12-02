import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header'

import AuthService from '../src/services/auth.service'
import { withRouter} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(App);