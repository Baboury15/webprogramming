import React from 'react'


  
  const Pricings =(props)=>{

    const Pricing = [
     {hairstyles:" waves", price:" $25"},
     {hairstyles:" AfroStyle", price:" $25"},
     {hairstyles:"highHair", price:"$25"}]
      

 

const Princing2 = Pricing.map( p =>{

  return <ul> {p.hairstyles} {p.price}</ul>
})
  
  
return (
  

  
     <div className ="prices">
       {props.checked}
        <div className="price2">

       <h3 >Here are the price Range of our services </h3>
        <h4>fells Free to Choose the selection you will like </h4>

          <input type ="checkbox"/>  {Princing2}

        <button onClick={()=>this.PricingsHandler}> Show List</button>

        </div>
      </div>
    
    )}
  
  

  
export default Pricings;

