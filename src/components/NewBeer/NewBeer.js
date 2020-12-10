import React from 'react'
import './NewBeer.css'
import axios from 'axios'

class NewBeer extends React.Component {
    state = {
        beerName:"",
        beerDescription:"",
        beerAlc:"",
        beerVotes:"",
        file: ""
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
    handleFile = e =>{
      let reader = new FileReader();
      if(e.target.files && e.target.files.length > 0){
          let file = e.target.files[0];
          if(file.size <= 1000000){
            reader.readAsDataURL(file)
            reader.onload = () => {
              this.setState({
                file: "data:"+ file.type + ";base64, " + reader.result.split(',')[1]
              
              })
              console.log(this.state.file)
            }
          }
      }
    }
    
    
    render(){
        
            return (
                <div className="post justify-center align-content-center">
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
                        placeholder="Enter Alcohool content "  name="beerAlc" className="form-control" onChange={this.handleChange} value={this.state.beerAlc}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Votes" name="beerVotes" className="form-control"  onChange={this.handleChange} value={this.state.beerVotes}
                      />
                    </div>
                    <div className="form-group">
                      <input 
                      type="file"
                        placeholder="Votes" name="beerVotes" className="form-control"  onChange={this.handleFile} 
                      />
                    </div>
      
                    
                    
                  
                    <button type="button" className="btn" onClick={this.handleCreate}>Create Beer</button>
                    <p>

                    </p>
                  </form>
                </div>
                
            
            )
    }

}

export default NewBeer