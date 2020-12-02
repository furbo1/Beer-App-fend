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
        axios.get("http://localhost:4004/beer/filter?beerName="+filterValue)
        .then(res => {
            this.setState({
                beerList:res.data,
            })
        }, err => {
            console.log("An error has occurred!")
        })
    }

render(){

    

    return(
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <form className="col-sm-12">
                    <input className="form-control input-100" 
                    type="search" 
                    placeholder="Search for your favorite beer! Cheers!" 
                    aria-label="Search"
                    name='tagline' 
                    onChange={this.handleChange}
                    value={this.state.filter}
                    />
                </form>
            </nav>
       
            
            <br/>
                <div className="card-group m-auto">
             
            {
                
                this.state.beerList.map((val,i)=>{
                    return (
                        <div className="card m-2">
                           
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
        </div>
    )
}

}

export default BeerList;