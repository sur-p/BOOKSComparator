import React from 'react';
import { Redirect } from 'react-router-dom';



class Person extends React.Component
  {
    constructor()
    {
      super();
    
    }
    componentDidMount()
    {

      console.log(this.props.history);

    }
                
      
    
     render()
     {
       const l={
            width:"100%",
            height:"50px",
            display:"inline-block"
              }

      const im={
        margin:"20px 0px 0px 0px",
        padding:"30px 30px 30px 30px"
      }
      const b={
        margin:"0px 0px 40px 0px"
      } 
    return (
   
  
  <div className="card" style={l}>
  <img src={this.props.image} style={im} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 class="card-title">{this.props.title}</h5>
     <p class="card-text">{this.props.authors}</p>
      <p class="card-text">{this.props.averageRating}</p>
      <p class="card-text">{this.props.description}</p>
      
    <a href={`/post/${this.props.isbn}`} style={b} className="btn btn-primary"> Compare Tool </a>
         </div>  
           </div>
           );

      } 
 }
 export default Person;