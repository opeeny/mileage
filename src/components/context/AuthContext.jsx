import React, { Component, createContext } from 'react';

const AuthContext = createContext();
class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }
    toggleAuthentication = (e) => {
        this.setState({isAuthenticated: !this.state.isAuthenticated})
    }
    render() { 
        return (
           < AuthContext.Provider value = {{...this.state, AuthContext: this.state.AuthContext}}>
                 {this.props.children}
           </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;