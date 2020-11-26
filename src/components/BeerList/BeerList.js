import React from 'react';
import axios from 'axios';
import Beer from '../BeerCard/BeerCard';
import './BeerList.css';
import { Link } from 'react-router-dom';
import BeerCard from '../BeerCard/BeerCard';


let infoBeers= "http://localhost:4004/beer/all";

class BeerList extends React.Component {
    state = {
        beerList:[],
        filter: ""
    }
    componentDidMount(){
        axios.get(infoBeers)
        .then(res => {
            this.setState({
                beerList:res.data,
            })
        })
    }

    handleChange = (e) => {
        let filterValue = e.target.value;
        this.setState({
            filter:e.target.value,
        })

        //EX: GET: "/search?name=Beer1&size=2l"
        axios.delete("https://ih-beers-api2.herokuapp.com/beers/search?q="+filterValue)
        .then(res => {
            this.setState({
                beerList:res.data,
            })
        })
    }

render(){

    

    return(
        <div>
             <input
                                placeholder="Filter by name"
                                name='tagline' className="form-control"
                                onChange={this.handleChange}
                                value={this.state.filter}
                            />
            {
                
                this.state.beerList.map((val,i)=>{
                    return (
                        <div className="beer-card">
                           
                            <Link to={`/beer/${val._id}`}>
                                <BeerCard 
                                    key={i}
                                    name={val.beerName}
                                    image={val.beerPicture}
                                    description={val.beerDescription}
                                    contributed_by={val.beerAlc}
                                />
                            </Link>
                        </div>
                    )
                        }
            
            )
                    }
        </div>
    )
}

}

export default BeerList;