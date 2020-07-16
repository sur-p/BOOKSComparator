import React from 'react';
import Person from './Person'
import axios from 'axios';
import Navbar from './Navbar';
import Background from './books.jpg';
import { Route } from 'react-router';
import Detail from './Detail';

var sectionStyle = {
   width: "100%",
    backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
   height:"700px",
  backgroundImage: `url(${Background})`
};


    
      
class List extends React.Component 
{
    constructor()
    {
      super();
      this.state = {
            x: [],

            
        };
    
         
    }
    
 
     componentDidMount()
        {
          console.log(this.props);
          console.log(this.props.match.params.id);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.id}`)
        .then(response=>
        {
            
            var y=[];
            var r;
      for (var i = 0; i < response.data.items.length; i++) {
            var item = response.data.items[i];
            console.log(item.volumeInfo.title);
            console.log(item.volumeInfo.authors);
            y=[...this.state.x];
            if(item.volumeInfo.industryIdentifiers[0].type=='ISBN_13')
         r=0;
         else
         r=1;
            y.push({title:item.volumeInfo.title,authors:item.volumeInfo.authors,averageRating: item.volumeInfo.averageRating,
            description:item.volumeInfo.description,image:item.volumeInfo.imageLinks.thumbnail,isbn:item.volumeInfo.industryIdentifiers[r].identifier});

           this.setState({x:[...y]});
           console.log(this.state.x);
            
              
        }

      }
        )
        }
       render()
       {
          
        return (

         <div className="App" style={ sectionStyle }>
      
         
         {this.state.x.map((person) => (
                       
                      
      <Person title={person.title} image={person.image} authors={person.authors} description={person.description}
      averageRating={person.averageRating}  isbn={person.isbn} {...this.props}/>
                    ))}

         
         
         
         
         </div>
          );

      }

}

export default List;