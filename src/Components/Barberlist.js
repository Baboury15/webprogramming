import React from 'react'

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



return (


          <div className="barbers">

            <h2 className =" Barberlist_name">
                
                 Here is the list of our Barbers :</h2>
         

              <p className ="Blist"> {barbersfinal1}</p> 


            

              <h3 className="BB">   Souley Diawara phone number : 646-245-5367</h3>
              <h3></h3>
              {<img  className ="BarbersPhotoss" src={require('./Soul-Barbershop.jpeg')} />}

              <h3 className="BB">John Cenna phone number : 646-245-5367</h3>
              {<img  className ="BarbersPhotoss" src={require('./soul-Barbershop2.jpg')} />}

              <h3 className="BB">Kobe Bryant phone number : 646-245-5367 </h3>
              {<img  className ="BarbersPhotoss" src={require('./Soul-Barbershop.jpeg')} />}

              <h3 className="BB">Ibrahim Bocoum phone number : 646-245-5367 </h3>
              {<img  className ="BarbersPhotoss" src={require('./soul-Barbershop2.jpg')} />}
              

           

             



              

            
       

        </div>
    )


}
export default Barberlist;

