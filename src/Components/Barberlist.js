import React from 'react'
import './Barberlist.css'

const  Barberlist =(props)=>{

const barbers1 =[{id:1, first_name:"Souley  ", last_name: "Diawara"},
{id:2, first_name:" John ", last_name: "CENA"}, 
{id:3, first_name:" Lebron ", last_name: "James"}
,{id:4, first_name:" Ibrahim ", last_name: "Bocoum"}];


const barbersfinal1 = barbers1.map( p =>{

    return <ul className ="names"> 

     {p.first_name} 
     {p.last_name}  
     
     {/* <img  className ="BarbersPhotos" src={require('./Soul-Barbershop.jpeg')} /> */}

     
     </ul>
})

const style ={
    backgroundColor:' white',
    font: 'inherit',
    border: '2px solid orange',
    padding: '8px',
    cursor: 'pointer',
  }



return (


          <div  style ={style} className="barbers">

            <h1 className =" Barberlist_name">
                
                 Here is the list of our Barbers :</h1>
         

              <p className ="Blist"> {barbersfinal1}</p> 


            
              {/* <div>
             <div className="BB">
              <p className="photoAbout2"> Souley Diawara phone number : 646-245-5367</p> 
               <img  className ="photoAbout2" src={require('./soul-Barbershop2.jpg')} />
               </div>
 
 </div>
              <h3 className="BB">   Souley Diawara phone number : 646-245-5367</h3>
              <h3></h3>
              {<img  className ="photoAbout2" src={require('./Soul-Barbershop.jpeg')} />}

              <h3 className="BB">John Cenna phone number : 646-245-5367</h3>
              {<img  className ="photoAbout2" src={require('./soul-Barbershop2.jpg')} />}

              <h3 className="BB">Kobe Bryant phone number : 646-245-5367 </h3>
              {<img  className ="BarbersPhotoss" src={require('./Soul-Barbershop.jpeg')} />} 

 */}


              {/* <h3 className="BB">Ibrahim Bocoum phone number : 646-245-5367 </h3>
              {<img  className ="BarbersPhotoss" src={require('./soul-Barbershop2.jpg')} />}
              
              {/* <div >

              <p className="qwer"> Souley Diawara phone number : 646-245-5367</p><img  className ="photoAbout2" src={require('./Soul-Barbershop.jpeg')} />  
  
  </div>
  
  
  

 
  <div>
    
 <img  className ="photoAbout2" src={require('./Soul-Barbershop.jpeg')} /> <p className="qwer"> Clean Shave : $25   </p>
  
  </div>

 
  <div>

 <img  className ="photoAbout2" src={require('./Afro_fade.jpg')} /> <p className="qwer"> Box Fade : $25 </p>
  
  </div>

  <div>

  <img  className ="photoAbout2" src={require('./Line_Up.jpg')} /><p className="qwer"> Line Up : $25 </p>
  
  </div>
  <div>
    
 <img  className ="photoAbout2" src={require('./Bear.jpg')} /><p className="qwer">  Fancy: $25 </p> */}







<div >
<p className="qwert">  Souley Diawara :  " Soul "</p>

<img  className ="photoAbout22" src={require('./Soul-Barbershop.jpeg')} /> 
  
  </div>
  
  
  <div>
  <p className="qwert"> Ibrahim Bocoum : IB</p> 

 <img  className ="photoAbout22" src={require('./soul-Barbershop2.jpg')} />
  
  </div>

 
  <div>
  <p className="qwert"> John Cena : JC </p>
 <img  className ="photoAbout22" src={require('./Soul-Barbershop.jpeg')} />
  
  </div>

 
  <div>
  <p className="qwert"> Alvin : AL </p>
 <img  className ="photoAbout22" src={require('./soul-Barbershop2.jpg')} />
  
  </div>

 

  
  </div>






            
            







)


    

}
export default Barberlist;

