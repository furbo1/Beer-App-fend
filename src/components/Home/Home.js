import React from 'react'
// import Header from '../Header/Header'
// import BeerList from '../BeerList/BeerList'


class Home extends React.Component {
  render () {
    return (
      <div className="">
      <div id="carouselExampleCaptions" className="carousel-fade modal-lg mx-auto w-50 h-25" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1727829/pexels-photo-1727829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/4022456/pexels-photo-4022456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
     

    

    )
  }
}

export default Home;
