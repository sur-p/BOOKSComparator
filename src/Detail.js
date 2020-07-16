import React from 'react';
import axios from 'axios';

class Detail extends React.Component
  {
    constructor()
    {
      super();
      this.state={
      	x:{},
      	y:{
      		flip:"",
      		ebay:"",
      		abebooks:""
      	}

      }
    }

    
                
    
    componentDidMount()
        {
          console.log(this.props);
          console.log(this.props.match.params.id);

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.props.match.params.id}`)
        .then(response=>
          {
          	console.log(response);
          	var item = response.data.items[0];
          	this.setState({x:{title:item.volumeInfo.title,authors:item.volumeInfo.authors,averageRating: item.volumeInfo.averageRating,
            description:item.volumeInfo.description,image:item.volumeInfo.imageLinks.thumbnail}});
            console.log(this.state.x);

    	  }
    	  )
       
        
          
        axios.get(`/final/${this.props.match.params.id}`)
        .then(response=>
        {

            console.log("here");
          console.log(response);
          var item = response.data.books[0];
          console.log(item.flip);
          this.setState({y:{flip:item.flip,ebay:item.ebay,abebooks:item.abebooks}});



    
            
              
        }

      
        )
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
   
  <div>
  <div className="card" style={l}>
  <img src={this.state.x.image} style={im} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 class="card-title">"nononono"</h5>
     <p class="card-text">{this.state.x.authors}</p>
      <p class="card-text">{this.state.x.averageRating}</p>
      <p class="card-text">{this.state.x.description}</p>
  
         </div>  
           </div>
              
           <div className="card">
  <div class="card-header">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsicfgNCC-2CMZHOMTbZpd8BY_cMfsd3DX96D4vW_zjB0eZ7J"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">{this.state.y.flip}</h5>
   <a href="https://www.flipkart.com" className="btn btn-primary">Go to site</a>
  </div>
    </div>
    <div className="card">
<div className="card-header">
<img src="https://i1.wp.com/pigflog.com/wp-content/uploads/2014/08/ebay-logo-pigflog.jpg?fit=862%2C862&ssl=1"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">{this.state.y.ebay}</h5>
   <a href="https://www.ebay.com" class="btn btn-primary">Go to site</a>
  </div>
</div>
<div className="card">
<div class="card-header">
     <img src="https://www.cornwallhospicecare.co.uk/wp-content/uploads/2017/09/abebooks-logo.jpg"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">{this.state.y.abebooks}</h5>
   <a href="https://www.abebooks.com" class="btn btn-primary">Go to site</a>
  </div>
</div>

</div>
           );

      } 
 }
 export default Detail;
