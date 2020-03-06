import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import CreatePackage from './components/packages/CreatePackage';
import Footer from './components/layout/Footer';
import ThemeContextProvider from './components/context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './components/context/AuthContext';
function App() {
  return (
    <Router>
      <div className="App">
       <ThemeContextProvider>
          <AuthContextProvider>
            <ThemeToggle/>
            {/* <Dashboard/> */}
            <Route exact path = '/dash'  component = {Dashboard}/>
          </AuthContextProvider>
        </ThemeContextProvider>
        <Switch>
          <Route path = '/create' component = {CreatePackage}/>
          <Route exact strict path = '/signin' component = {SignIn}/>
          <Route path = '/signup' component = {SignUp}/>
         
          {/* <Route path = '/theme' component = {ThemeToggle}/> */}
        </Switch> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
