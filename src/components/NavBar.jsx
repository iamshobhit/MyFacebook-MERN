import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'; 

function NavBar() {
    const history = useHistory();
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

            <h2 className="logoStyle d-inline-block">MyFacebook</h2>
        
        </Link>

        <Link className="navbar-brand d-md-none" to="/">
            
            <img src="images/fblogo.png" 
            alt="" 
            width="60" 
            height="60" 
            className="" />

        </Link>
        
        <Button 
        onClick={() => history.push('/signin')} 
        variant="btn btn-outline-light" 
        className="ml-auto p-1" 
        data-toggle="modal" 
        data-target="#exampleModalCenter1">
        
            Sign In
        
        </Button>

        <Button 
        onClick={() => history.push('/signup')} 
        variant="btn btn-outline-light" 
        className=" p-1 ml-1" 
        data-toggle="modal" 
        data-target="#exampleModalCenter2">
        
            Sign Up
        
        </Button>
        </nav>
        </>
    )
}

export default NavBar;
