import React from 'react'
import axios from 'axios'
import './BeerCard.css'

class BeerCard extends React.Component {

    state={
        beer: ''
    }
    
    render(){
        return (

            <div className="card" >
            <img src={this.props.image} className="card-img-top" alt="Beer" />
                <div className="card-body">
                 <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               
                </div>
                <button type="button" className="btn mx-auto mb-1">Details</button>
                
                
                <button type="button" className="btn mx-auto mb-1">Order Now!</button>
            </div>
        )
    }

}

export default BeerCard