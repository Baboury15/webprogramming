// import React from "react"


// const LogIn =(props)=>{


//     return (
       

//         <div className = "Login">

//         <div className="input ">
//         <span><h3> Please Login here:</h3></span>

//         <p id="passwd">First Name</p> 
//         <input type ="text" onChange ={props.firstname} value ={props.current}/> 
        

//         <p id="passwd">Last Name</p>
//         <input type ="text"  onChange ={props.lastname}  value={props.current} />
      
//        <p id="passwd" >password</p>
//        <input type ="text"  onChange ={props.lastname}  value={props.current} />

//          </div>




// </div>

        
//     )

// }

// export default LogIn;

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
        

      <div className="Login">


                  <h2 className="logIn_words">Please LogIn </h2>


        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="email" bsSize="large">
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}