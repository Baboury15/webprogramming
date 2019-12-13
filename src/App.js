import React from "react";
import './App.css';
import {Component} from "react"
import About from './Components/About'
import Barberlist from './Components/Barberlist'
import LogIn from './Components/LogIn'
import Home from './Components/Home'


const jsonHeaders =() =>({

  'Content-Type': 'application/json'
});

class App extends Component {
  constructor(props){
  super(props);

  this.state={
    barberlis:[{id:1,first_name:"John ", last_name: "lee", rating: "Good"},
    {id:2, first_name:"Cris ", last_name: "bern", rating: "Bad"},
    {id:3, first_name:"ibra", last_name: "Boc", rating: "Good"}]
  }
  
  
  this.barberNameHandler =()=>{
  
    this.setState({
      barberlis:[{id:1, first_name:"John ", last_name: "lee", rating: "Good"},
      { id:2,first_name:"Cris ", last_name: "bern", rating: "Bad"},
      {id:3,first_name:"ibra", last_name: "Boc", rating: "Good"}]
    
  
    })
  }
}






  render(){
  const blist = this.state.barberlis.map(p => {

      return <Barberlist 
      key={p.id}
      first_name ={p.first_name}
      last_name ={p.last_name}
    
      rating ={p.rating}
      />
  })
  
  
   return (

    
    <div className="App">
   
   <Home  abc={blist} />
  
       
  
            
    </div>
  );
}
}


export default App;
