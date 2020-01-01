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

   
 
  state={
    barberlis:[
    {first_name:"John ", last_name: "lee", rating_number: "Good"},
    {first_name:"Cris ", last_name: "bern", rating_number: "Bad"},
    {first_name:"ibra", last_name: "Boc", rating_number: "Good"}
  ],

    ShowBarbers:false,


 }
 
  
  barberNameHandler =()=>{
  
    this.setState({
      barberlis:[

      { first_name:"John1 ", last_name: "lee1", rating: "Good1"},
      { first_name:"Cris3 ", last_name: "bern3", rating: "Bad3"},
      { first_name:"ibra4", last_name: "Boc4", rating: "Good4"}
    
    ]
    
  
    })
  }

   
  barberButton =()=>{
    const displaylist = this.state.ShowBarbers;
      this.setState({
        ShowBarbers: !displaylist,
      })
    }







  render(){
  const blist = this.state.barberlis.map(p => {

      return <Barberlist 
      key={p.id}
      first_name ={p.first_name}
      last_name ={p.last_name}
    
      rating_number ={p.rating_number}

      />
  })
  
  
   return (

    
    <div className="App">
   
    {/* <button onClick={this.displaylist} >Show list </button> */}

     { this.state.showBarbers ?
     <div>

<Barberlist
 first_name ={this.state.barberlis.first_name}
 last_name ={this.state.barberlis.last_name}
 rating_number={this.state.barberlis.rating_number}
 />
 {blist}
   
   </div> :null
  }
   <Home/>
 
</div>
  );
}

}

export default App;
