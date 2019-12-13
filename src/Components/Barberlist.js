import React from 'react'

const  Barberlist =(props)=>{


const {id, first_name, last_name, rating_number, phone_number , abc} = props;


return (


          <div key={id} className="barbers">

            <p>  {id} hi {first_name}hi {last_name}hi {phone_number}</p>
            
            <p>{rating_number}</p> 
            {abc}
            {/* <button onClick={props.clicked}> barbers</button> */}

       

        </div>
    )


}
export default Barberlist;

