import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return( 
            

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">World Beers Cheers!</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/beers">Beer List</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/addbeer">Add Beer</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/random">Random Beer</Link>
                    </li>
                    
                    
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    <div className="container">
          
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </nav>

        )
    }
}

export default Header;