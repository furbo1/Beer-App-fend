import React from 'react'
import axios from 'axios'

class BeerCard extends React.Component {

    state={
        beer: ''
    }
    
    render(){
        return (

            <div class="card" >
            <img src={this.props.image} class="card-img-top" alt="Beer"/>
                <div class="card-body">
        <h5 class="card-title">{this.props.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               
                </div>
            </div>
        )
    }

}

export default BeerCard