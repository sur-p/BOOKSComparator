import React from 'react';


const Persons=(props)=>
	{
                
    const l={
            width:"33%",
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
  <img src={props.image} style={im} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 class="card-title">{props.title}</h5>
    <p class="card-body">{props.authors}</p>
    <p class="card-body">{props.rating}</p>
    <a href="/" style={b} className="btn btn-primary"> Compare Tool </a>
         </div>  
           </div>
           )
       
 }
 export default Persons;