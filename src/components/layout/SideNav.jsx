import React from 'react'

//we're using functional components
export const SideNav = () => {
    return(
        <div className="container">
            <p>mmmm</p>
            <ul i = "slide-out" className = "sidenav">
            <li>
                <div className="user-view">
                    <div className="background">
                        <img src="images/bg.jpg" alt="wait"/>
                    </div>
                    <a href="#user"><img className="circle" src="images/yuna.jpg" alt = ''/></a>
                    <a href="#name"><span className="white-text name">Green mile</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a href = '#!' className="subheader">Subheader</a></li>
            <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        </div>
        
       )
}

export default SideNav