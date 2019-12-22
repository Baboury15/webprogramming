import React from "react"
import {Component} from "react"
import { Link, Route, BrowserRouter,Switch, NavLink } from 'react-router-dom';
import About from './About'
import Login from './LogIn'
import Barberlist from './Barberlist'
import Pricings from './Pricings'


class Home extends Component{


  state={
  Pricing :[
  {hairstyles:"", price:""},
  {hairstyles:"", price:""},
  {hairstyles:"", price:""}]
  
  }

  priceHandler=()=>{

    this.setState({
      Pricing: [
        {hairstyles:" waves", price:" $25"},
        {hairstyles:" AfroStyle", price:" $25"},
        {hairstyles:"highHair", price:"$25"}]
    })
  }


  render() {
    
    return (

      <div className = "Home">
<div>
      <BrowserRouter>
      
        <div className ="Directions">

        <h1 className ="welcome_words">Welcome to SoulBarbershop</h1>


          <div className = "wlcm">


        <div > 
                <Link className ="link" to="/About">ABOUT</Link>
                <Link  className ="link"  to="/Login">LOGIN</Link>
                <Link  className ="link" to="/Barberlist">BARBERS</Link>
                <Link className ="link"  to="/Pricings">PRICINGS</Link>
                <Link  className ="link" to="/APPOINTEMENTS">APPOINTEMENTS</Link>

                </div>

              

            <Switch>
              <Route exact path="/" component={About} />
              
              <Route path="/about" component={About} />
              <Route path="/Login" component={Login} />
              <Route path="/Barberlist" component={Barberlist} />
              <Route path="/Pricings" component={Pricings} />



            </Switch>
        
        </div>
        </div>
      </BrowserRouter>
      
      </div>

      


     </div>
    

    )

}
}

export default Home;