import React from 'react'
import "./BeerDetails.css";
import axios from 'axios';

class BeerDetails extends React.Component {

    state = {
        image_url: "",
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewer_tips:"",
        attenuation_level:"",
        contributed_by:""
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
          .then( res => {
            let beer = res.data
            this.setState(beer);
          });
      }
    
    render(){
        return (
            <div className="card card-details">
                <img src={this.state.image_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text">{this.state.description}</p>
                    <p className="card-text">{this.state.contributed_by}</p>
                </div>
            </div>
        )
    }
}
export default BeerDetails;