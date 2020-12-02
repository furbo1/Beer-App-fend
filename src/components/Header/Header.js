import React from 'react'
import {Link} from 'react-router-dom'
import AuthService from '../../services/auth.service'
import './Header.css'
import picture from '../../assets/images/BeerAppLogo.png'


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
        // this.props.history.push("/signin");
        window.location.href="/";
        
    }

    render(){

        console.log(this.state.username)

        return (
            
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark sticky-top">
                <Link to={"/"} className="navbar-brand show-mobile">
                    <img src={picture} alt="" className="picture"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {this.state.username !== '' ? (
                <div className="navbar-nav justify-content-between navbar-100">
                    <div className="navbar-nav mr-auto">
                      <Link to={"/"} className="navbar-brand">
                          <img src={picture} alt="" className="picture show-desktop"/>
                      </Link>
                  
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link" style={{color:'#f5b543'}}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/beers"} className="nav-link" style={{color:'#f5b543'}}>
                          Beers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/addbeer"} className="nav-link" style={{color:'#f5b543'}}>
                          Add Beer
                        </Link>
                      </li>
                      
                      </div>
          
                  <div className="user-details">
                        {this.state.username  && (
                        <Link to={"/user"} className="user-name">
                          Hi,  {this.state.username}
                        </Link>
                        )}
                        <Link to={"/signin"} className="logout" onClick={this.logOut}>
                          LogOut
                        </Link>
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
          </div>
        </nav>

                
        )
       
        
    }
}

export default Header;