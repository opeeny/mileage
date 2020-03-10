//we might use cycle of host, class component is better
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import { ThemeContext } from '../context/ThemeContext';
import {Logout, ChangeTheme} from '../auth/Logout';


class Dashboard extends Component {

  static contextType = ThemeContext;//u can't hqve two static properties, so use consumer to consume context
  //one context can use static variable, the other context could use a consumer or nest one consumer inside the other
   render() {
        console.log('..inside Dashbard', this.context);
        //destructure those properties frm the context
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme? light : dark;
    
       return (
        <>
            <aside style = {{background: theme.ui, color: theme.bg}} className="opeeny-aside">
                    <div className="control-bar">
                        <div className="text-center">
                            <span className="menu-toggle">
                                <i className="chart"></i>
                                <i className="chart"></i>
                                <i className="chart"></i>
                            </span>
                        </div>  
                        <p className="copyright">
                            <Link to = "/">Green Miles 2020</Link> - &copy; We deliver safely<i className="fa fa-heart"></i> 
                        </p>
                </div>


                <div style = {{background: theme.ui, color: theme.bg}} className="slide-menu-container">
                    <div className="slide-menu menu-opend navbar-scrolled opeeny-menu-style-2">
                        <div className="opeeny-user-info">
                            <ul className="social-media list-unstyled text-center">
                                <li><Link to="/https" className="facebook" ><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to="https" className="twitter" ><i className="fab fa-twitter-square"></i></Link></li>
                                <li><Link to="#!" className="google-plus"><i className="fab fa-google-plus"></i></Link></li>
                                <li><Link to="https" className="linkedin" ><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link to="http" className="behance"><i className="fab fa-skype"></i></Link></li>
                            </ul>

                            <div className="opeeny-img-box">
                                <div id = "profile" className="opeeny-img">
                                <i class="fas fa-user"></i>
                                </div>
                            </div>
                        </div>
                        <div className="nav">
                            <ul className="list-unstyled opeeny-links">
                                <li className="active">
                                    <Link to = "/"><i className="fa fa-home"></i>Dashboard</Link>
                                </li>
                                <li className = "first">
                                    <Link to = "/suppliers"><i className="fa fa-laptop"></i>view suppliers</Link>
                                </li>
                                <li  className = "first">
                                    <Link to = "/loaders"><i className="fa fa-laptop"></i>view suppliers</Link>
                                </li>
                                <li  className = "first">
                                    <Link to = "/suppliers"><i className="fa fa-laptop"></i>view suppliers</Link>
                                </li>
                                <li  className = "first">
                                    <Link to = "/suppliers"><i className="fa fa-laptop"></i>view suppliers</Link>
                                </li>
                                <li  className = "first">
                                    <Link to = "/suppliers"><i class="fas fa-question-circle"></i>Help!</Link>
                                </li>
                                <li  className = "first">
                                    <Link to = "/suppliers"><i className="fas fa-cog"></i>Settings</Link>
                                </li>
                                
                            </ul>
                        
                        </div>
                    </div>
                
                </div>

            </aside>  
            <Logout />
            <ChangeTheme/>
            <main style = {{background: theme.ui, color: theme.bg}} className="main-page-content">
            
            <section style = {{background: theme.ui, color: theme.bg}} className="full-page" id="home">
            <div className="home overlay-container">
                <div className="overlay">
               
                    <div className="section-intro opeeny-container display-table">
                        <div className="display-table-cell">
                            <h3 className="opeeny-hello">HI, IAM</h3>
                            <h1 className="opeeny">GREEN MILE DASHBOARD</h1>
                            <h3 className="opeeny-work-description">&nbsp;<span className="opeeny-work"></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </main>
            <Footer/>
    </>
       );
       
   }
}

export default Dashboard