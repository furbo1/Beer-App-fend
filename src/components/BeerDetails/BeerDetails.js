import React from 'react'
import "./BeerDetails.css";
import axios from 'axios';

class BeerDetails extends React.Component {

    state = {
        beerName:"",
        beerDescription:"",
        beerPicture:"",
        beerAlc:"",
        beerVotes:""
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        axios.get(`http://localhost:4004/beer/${params.beerId}`)
          .then( res => {
            let beer = res.data
            this.setState(beer);
          });
      }
    
    render(){
        return (
            <div className="card card-details">
                <img src={this.state.beerPicture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.beerName}</h5>
                    <p className="card-text">{this.state.beerDescription}</p>
                    <p className="card-text">{this.state.beerAlc}</p>
                    <p className="card-text">{this.state.beerVotes}</p>
                </div>
            </div>
        )
    }
}
export default BeerDetails;