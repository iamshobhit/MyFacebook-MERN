import React,{useContext} from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

function PublicNavBar() {
    const auth = useContext(AuthContext);
    return (
        
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg">
        <Link className="navbar-brand d-none d-md-block" to="/">
            <img 
            src="images/fblogo.png" 
            alt="" 
            width="60" 
            height="60" 
            className="" />

            <h2 className="logoStyle d-inline-block shade">MyFacebook</h2>
        
        </Link>

        <Link className="navbar-brand d-md-none" to="/">
            
            <img src="images/fblogo.png" 
            alt="" 
            width="80" 
            height="80" 
            className="p-0" />

        </Link>

        <Button variant="btn btn-outline-primary logoStyle" className="ml-auto p-1 " >
            <Link
              to={
                auth.isAuthenticated() ? '/userpage' : '/login'
              }
              className="text-decoration-none text-white"
            >
              Log In
            </Link>
        </Button>

        <Button 
        variant="btn btn-outline-primary logoStyle" 
        className=" p-1 ml-1 mr-1 " >

        <Link to="/signup" className="text-white text-decoration-none ">
            Sign Up
        </Link>
        
        </Button>
        </nav>
        </>
    )
}

export default PublicNavBar
