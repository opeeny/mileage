import React, { Component } from "react";



 class CreatePackage extends Component {
     state = {
        title: '',
        content: ''
     }
     handleSubmit = (e) => { 
        e.preventDefault();
        console.log('This is the state', this.state);
        this.props.projectAction(this.state);//passing state to project-actions
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
                    <h5 className="white-text text-dark-1">Create Package</h5>
                    <div className="input-field">
                        <label className = "" htmlFor="package">Package</label>
                        <input className = "" type="text" id = "title" onChange = {this.handleChange}/>  
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Product de</label>
                        <textarea type="text" id = "content" className = "materialize-textarea" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add</button>
                    </div>
                 </form>
             </div>
         );
     }
 }
 //map
 
 //the firt param of connect() is map state to props(mapStateToProps)
 export default CreatePackage;