import React from 'react'
import Login from '../Login/Login'
import Signup from '../Register/Register'
import Header from '../Header/Header';
import './Home.css'


class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Welcome to the world's largest beer menu!</h1>
     <div className="container">
       
      <div id="carouselExampleCaptions" className="carousel-fade modal-lg mx-auto" data-ride="carousel" data-interval="2000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/09/14/11/49/beer-1669295__480.png" className="d-block w-100 mx-auto" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/09/14/11/35/beer-1669273__480.png" className="d-block w-100 mx-auto" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2020/03/17/11/43/beer-4939915__480.png" className="d-block w-100 mx-auto" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div> */}
    </div>
  </div>
  {/* <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a> */}
    </div>
  </div>
  
</div>
    )
  }
}

export default Home;
