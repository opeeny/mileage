import React from 'react'
import { NavLink } from 'react-router-dom'
//
const SignedOutLinks = () => {//

    return(
       <nav className = "nav-wrapper grey darken-3">
          <div className = "container">
          <ul className = "right">
                <li><NavLink to= '/signup'>Add user</NavLink></li>
                <li><NavLink to= '/signin'>Login</NavLink></li>
            </ul> 
        </div>
        </nav>
    )
}
export default SignedOutLinks