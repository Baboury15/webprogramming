import {Component} from "react"


class Pricings extends Components {
  constructor(props){
  super(props);
  this.state ={
    Pricing:[
      {hairstyles:"", price:""},
      {hairstyles:"", price:""},
      {hairstyles:"", price:""}]     



  }
  PricingsHandler=()=>{
    setPrice({
   Pricing: [
     {hairstyles:" waves", price:" $25"},
     {hairstyles:" AfroStyle", price:" $25"},
     {hairstyles:"highHair", price:"$25"}]
 
 
 
 })
  }
  }
  render(){



return (
  
     <div className ="price">
        <h3>Here are the price Range of our services </h3>
        <h4>fells Free to Choose the selection you will like </h4>

        <div className ="Price ">

        <button onClick={PricingsHandler}> Show List</button>

        {setPrice}

        

        </div>

      
     
      </div>
    )}
  }
  

  
export default Pricings;

