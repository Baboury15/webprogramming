import React from 'react'
import './Pricings.css'


  
  const Pricings =(props)=>{

    const Pricing = [
     {hairstyles:" waves", price:" $25"},
     {hairstyles:" AfroStyle", price:" $25"},
     {hairstyles:"highHair", price:"$25"}]
      

 

const Princing2 = Pricing.map( p =>{

  return <ul> {p.hairstyles} {p.price}</ul>
})
  
const style ={
  backgroundColor:' white',
  font: 'inherit',
  border: '2px solid orange',
  padding: '8px',
  cursor: 'pointer',
}
  
return (
  
  
     <div style ={style}  className ="prices">
       
        <div  className ="HairstylePrice">

        {/* <h1>Please select the Hairstyles you will like to have  </h1> */}
         <ul className="qwert" >
          
        <li >  Waves : $25  </li>
         
        <li > Line Up :  $25 </li>
         
        <li > Box Fade : $25  </li>
          
        <li > Afro Fade : $25 </li>
       
        <li >  Clean Shave : $25   </li>
        
       <li >  Fancy : $25  </li>

      <li > HighHair :  $25  </li>
        
          </ul>
        
         </div>

           <div >

         <img  className ="photoAbout2" src={require('./Waves.jpg')} />  <p className="qwer">  Waves : $25  </p>
           
           </div>
           
           
           <div>

          <img  className ="photoAbout2" src={require('./ShaveSide.jpg')} /><p className="qwer"> Shave Side :  $25</p> 
           
           </div>

          
           <div>
             
          <img  className ="photoAbout2" src={require('./Clean_shave.jpg')} /> <p className="qwer"> Clean Shave : $25   </p>
           
           </div>

          
           <div>

          <img  className ="photoAbout2" src={require('./Afro_fade.jpg')} /> <p className="qwer"> Box Fade : $25 </p>
           
           </div>

           <div>

           <img  className ="photoAbout2" src={require('./Line_Up.jpg')} /><p className="qwer"> Line Up : $25 </p>
           
           </div>
           <div>
             
          <img  className ="photoAbout2" src={require('./Bear.jpg')} /><p className="qwer">  Fancy: $25 </p>
           
           </div>
         







        
      </div>
    
    )}
  
  

  
export default Pricings;

