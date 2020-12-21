import React from 'react'
import Login from '../Login/Login'
import Signup from '../Register/Register'
import Header from '../Header/Header';
import './Home.css'


class Home extends React.Component {
  constructor(props){
    super(props)
  }

  // handleChange = (e) => {
  //   let filterValue = e.target.value;
  //   this.setState({
  //       filter:e.target.value,
  //   })

  //   //EX: GET: "/search?name=Beer1&size=2l"
  //   axios.get("http://localhost:4004/beer/filter?beerName="+filterValue)
  //   .then(res => {
  //       this.setState({
  //           beerList:res.data,
  //       })
  //   }, err => {
  //       console.log("An error has occurred!")
  //   })
// }
  render () {
    return (
      <div>
    <main>

      <div className="container marketing">
      <nav className="navbar navbar-light bg-light">
                <form className="col-sm-12">
                    <input className="form-control input-100" 
                    type="search" 
                    placeholder="Enter your address here" 
                    aria-label="Search"
                    name='tagline' 
                    // onChange={this.handleChange}
                    // value={this.state.filter}
                    />
                </form>
            </nav>
            <hr className="featurette-divider"/>

       
        <div className="row">
          <div className="col-lg-4">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="file:///Users/alex/Downloads/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
            <img src="https://images.pexels.com/photos/1224228/pexels-photo-1224228.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded " alt="Beer Image"></img>

            <h2>Beers</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-secondary order-btn" href="#" role="button">Order now &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
            <img src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded " alt="Beer Image"></img>

            <h2>Food</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a className="btn btn-secondary order-btn" href="#" role="button">Order now &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://images.pexels.com/photos/1224228/pexels-photo-1224228.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
            <img src="https://images.pexels.com/photos/4113669/pexels-photo-4113669.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded " alt="Beer Image"></img>

            <h2>Soft Drinks</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary order-btn" href="#" role="button">Order now &raquo;</a></p>
          </div>
        </div>


       

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7 top-text">
            <h2 className="featurette-heading">Fastest delivery to your door. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://miro.medium.com/max/1000/0*RHHxKod5FoRBI8Fk.png" />
          </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1590678823777-3UO1FH17YY3AQOY9XUXR/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/Restaurant-Safe-Food-Delivery.png?format=2500w" />

          </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, follow your order step by step on your mobile device. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://hackernoon.com/drafts/o4mb322q.png" />
          </div>
        </div>

        <hr className="featurette-divider"/>
        </div>


    
      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017-2020 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    </main>
    </div>

     
       
     
  
   
    )
  }
}

export default Home;
