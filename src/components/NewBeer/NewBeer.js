import React from 'react'
import './NewBeer.css'
import axios from 'axios'

class NewBeer extends React.Component {
    state = {
        beerName:"",
        beerDescription:"",
        beerPicture:"",
        beerAlc:"",
        beerVotes:""
    }
    
    handleCreate = () =>{
      
    
      axios.post(`http://localhost:4004/beer/create`, this.state)
        .then(res => {
          console.log(res);
          console.log(res.data);
          alert('Beer created!')
        }, error => {
          console.log(error)
          alert(error)

        })
              
    }
    
    handleChange = e => {
      let change = {};
      change[e.target.name] = e.target.value;
      console.log(change)
      this.setState(change)
    }
    
    
    render(){
        
            return (
                <div className="post">
                  <h2 className="title-form">Create a new beer!</h2> 
                  <form className="post" >
                    <div className="form-group">
                      <input
                          placeholder="Enter Beer name" name='beerName' className="form-control" onChange={this.handleChange} value={this.state.beerName}
                            />
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Enter Beer Description" name='beerDescription' className="form-control" onChange={this.handleChange} value={this.state.beerDescription}
                      />
                    </div>
      
                    <div className="form-group">
                      <input
                        placeholder="Add the beer picture link"  name='beerPicture' className="form-control" onChange={this.handleChange} value={this.state.beerPicture}
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        placeholder="Enter Alcohool content "  name="beerAlc" className="form-control" onChange={this.handleChange} value={this.state.beerAlc}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Votes" name="beerVotes" className="form-control"  onChange={this.handleChange} value={this.state.beerVotes}
                      />
                    </div>
      
                    
                    
                  
                    <button type="button" className="btn btn-primary" onClick={this.handleCreate}>Create Beer</button>
                    <p>

                    </p>
                  </form>
                </div>
                
            
            )
    }

}

export default NewBeer