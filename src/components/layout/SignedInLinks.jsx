import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {//

    return(
       <nav className = "nav-wrapper grey darken-3">
          <div className = "container">
          <ul className = "right">
                <li><NavLink to= '/create'>Create Package</NavLink></li>
                {/* <li><NavLink to= '/'>Log out</NavLink></li> */}
                <li><NavLink to= '/' className = "btn btn-floating pink-text white lighten-1">NN</NavLink></li>
            </ul> 
        </div>
        </nav>
    )
}
export default SignedInLinks