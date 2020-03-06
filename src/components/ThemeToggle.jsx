import React, { Component } from 'react';
import { ThemeContext } from './context/ThemeContext';

class ThemeToggle extends Component {

    static contextType = ThemeContext;
    
    render() { 
        console.log(this.context);
        const { toggleTheme } = this.context;
        console.log('am wrecked', toggleTheme);
        return ( <button onClick = {toggleTheme}>Toogle</button> );
    }
}
 
export default ThemeToggle;