import React from 'react';
import Similiar from './Similiar'
import Navbar from './Navbar';
import List from './List';
import Search from './Search';
import Detail from './Detail'

//@
//import { Router, Route, Switch , browserHistory } from 'react-router';
import { BrowserRouter, Route, Link ,Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      
        <Switch>
        <Route path="/post/:id" exact component={Detail}/>
        <Route path="/title/:id" exact component={List} />
        <Route path="/similiar" exact component={Similiar}/>
        <Route path="/" exact component={Search} />

         
        
          
        </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;