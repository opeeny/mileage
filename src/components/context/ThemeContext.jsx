import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#fff', ui: '#fff', bg: '#000' },
        dark: {syntax: '#ddd', ui: '#344A5C', bg: 'black'}
    }

    render() { 

        this.state.toggleTheme = (e) => {
            this.setState({ isLightTheme: !this.state.isLightTheme });
            console.log(e, ' change state', this.state.isLightTheme);
        }
        //console.log('inside theme', this.state);
        return (  
            <ThemeContext.Provider value = {{...this.state, toggleTheme: this.state.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
            
        );
    }
}
 
export default ThemeContextProvider;
