import React from 'react'
import {Link} from 'react-router-dom'
import AuthService from '../../services/auth.service'


class Header extends React.Component{

    state = {
        username: '',
        email: ''
    }
    

    


    componentDidMount() {
        
        let user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.setState({
                username: user.username,
                email: user.email
            }) 
        }
    }

    logOut() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.props.history.push("/signin");
        
    }


    render(){

        console.log(this.state.username)

        return (
            
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                {this.state.username !== '' ? (
                <div className="navbar-nav">
            <div className="navbar-nav mr-auto">
              <Link to={"/"} className="navbar-brand">
            BeersApp 
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
                <Link to={"/beers"} className="nav-link">
                  Beers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addbeer"} className="nav-link">
                  Add Beer
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/beer/:beerId"} className="nav-link">
                  Random Beer
                </Link>
              </li>

            {this.state.username  && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Hi,  {this.state.username}
                </Link>
              </li>
            )}
              </div>
              {/* <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {this.state.currentUser.username}
                </Link>
              </li> */}
              
            </div>
              
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a href="/signin" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                    </li>
                    </div>
            </div>
            
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/signin"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

                
        )
       
        
    }
}

export default Header;