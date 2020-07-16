import React from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";

import Background from './books.jpg';

var sectionStyle = {
   width: "100%",
    backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
   height:"700px",
  backgroundImage: `url(${Background})`
};

class Search extends React.Component 
{
    constructor()
    {
      super();
      this.state = {
            title:"",

            
        };
    
         
    }
    nameChangedHandler = ( event) => {


  

    // const person = Object.assign({}, this.state.persons[personIndex]);

    

    this.setState( {title:event.target.value } );
  }
     onNavigateHome=()=>
     {
           this.props.history.push(`/title/${this.state.title}`)
     }
    render()
    {
      return(
        <div>
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"
   onChange={this.nameChangedHandler}  value={this.state.title}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" onClick={this.onNavigateHome} type="button" id="button-addon2">Button</button>
  </div>
     </div>
     <div>
     <h1>Want to get recommended for books?</h1>
     <Link to={"/similiar"}><h3>want similiar book ta a book which you like</h3></Link>
     <h3>Look at most popular books </h3>

     </div>
       </div>

      );
    }
  }
export default Search;