import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logout from './Logout';
import {Link} from 'react-router-dom';

const PrivateNavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg flex justify-content-between">
      <div>
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
      </div>
      
      <div className="d-inline-block ml-auto px-4" >
        <Logout />
      </div>

      </nav>
    </>
  );
};
export default PrivateNavBar;
