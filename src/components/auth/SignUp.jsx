import React, { Component } from "react";

 class SignUp extends Component {
     state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                 <h5 className="card-title white-text text-center"><strong>ADD NEW USER</strong></h5>
                 <div className="input-field">
                    <input type="text" id="inputText" className="form-control" placeholder="Username" required autoFocus name="username" onChange={this.handleChange} />
                    <label htmlFor="inputText">Username</label>
                 </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id = "email" onChange = {this.handleChange} autoFocus/>  
                    </div>
                    <div className="form-label-group">
                        <input type="text" id="inputRole" className="form-control" placeholder="role" required name="role" onChange={this.handleChange} />
                        <label htmlFor="inputRole">Role</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id = "password" onChange = {this.handleChange}/>
                    </div>
                    <div className="form-label-group">
                        <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required name="confirm_password" onChange={this.handleChange} />
                        <label htmlFor="inputConfirmPassword">Confirm Password</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id = "firstName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id = "lastName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                    </div>
                 </form>
             </div>
         );
     }
 }
 export default SignUp