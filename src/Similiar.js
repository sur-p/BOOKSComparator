import React from 'react';
import Person from './Person'
import axios from 'axios';
import Navbar from './Navbar';
import Background from './books.jpg';
import { Route } from 'react-router';
import Persons from './Persons';



    
      
class Similiar extends React.Component 
{
    constructor()
    {
      super();
      this.state = {
            x:[],
            title:""
            
        }
      this.componentDidMount = this.componentDidMount.bind(this)
         
    }

     componentDidMount()
        {
        
//url = 'http://localhost:5000/api'
//# Change the value of experience that you want to test
//r = requests.post(url,json={'exp':1.8,})
//print(r.json)

          console.log(this.props);
          console.log(this.props.match.params.id);
          var body = {
    
    'title':"Fifty Shades Darker (Fifty Shades, #2)"
}

axios({
    method: 'post',
    url: '/api',
    data: body
})
.then((response)=> 
{
      
            var r;
      for (var i = 0; i < response.data.book.length; i++) {
            var item = response.data.book[i];
            var y=[];
            console.log(item.image);
            console.log(item.title);

            y=[...this.state.x];
            
         
          
            y.push({title:item.title,authors:item.authors,rating: item.rating,
            image:item.image});
           
           
           this.setState({x:[...y]});
           console.log(this.state.x);
           
            
}
})


    }   

      
    nameChangedHandler = ( event) => {


  

    // const person = Object.assign({}, this.state.persons[personIndex]);

    
 
    this.setState( {title:event.target.value } );
  }

  onNavigateHome=()=>
     {
          
           this.title=" ";

     }



render()
{
	console.log(this.state.title);

	return(
		<div>
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"
   onChange={this.nameChangedHandler}  value={this.state.title}/>
  <div className="input-group-append">

    <button className="btn btn-outline-secondary" onClick={this.onNavigateHome} type="button" id="button-addon2">Button</button>
  </div>
  </div>

         {this.state.x.map((person) => (
                       
                      
      <Persons title={person.title} image={person.image} authors={person.authors} 
      rating={person.rating}  {...this.props}/>
                    ))}
  </div>


		);

}


}
export default Similiar; 