import React, { Component } from "react";

 class SignIn extends Component {
     state = {
        email: '',
        password: ''
     }
     handleSubmit = (e) => { 
        e.preventDefault();
        console.log('This is the state', this.state);
     };
     handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        });
     };
     render() {
         return(
             <div className="container">
                 <form onSubmit = {this.handleSubmit} className="className">
                    <h5 className="white-text text-dark-3">SignIn</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id = "email" onChange = {this.handleChange} autoFocus/>  
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id = "password" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                 </form>
             </div>
         );
     }
 }
 export default SignIn