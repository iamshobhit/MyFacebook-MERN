import React,{ useContext } from 'react';
import {AuthContext} from '../context/AuthContext'
import PublicNavBar from '../components/PublicNavBar'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <PublicNavBar/>
      <div className="container-fluid">
      <div className="absolute left-0 top-0 mt-32 lg:mt-48 px-12 nato-sans">
          <div className="w-full lg:w-2/3">
            <h1 className="text-gray-200 text-2xl lg:text-6xl sm:text-5xl font-bold leading-tight">
             The official stated purpose of Facebook is to make the world more open and connected. Facebook's latest mission statement is that people use Facebook to stay connected with friends and family, discover what's going on in the world and share and express what matters to them.
            </h1>
            <h2 className="text-gray-400 text-md sm:text-2xl sm:mt-10 mt-4">
            Facebook is defined as an online social networking website where people can create profiles, share information such as photos and quotes about themselves, and respond or link to the information posted by others. An online social networking website is an example of Facebook.
            </h2>
            <div className="mt-4 sm:mt-10 w-48">
            
            <Button variant="btn btn-outline-primary logoStyle bg" className="ml-auto p-1 mb-2" >
            
            <Link
              to={auth.isAuthenticated() ? '/userpage' : '/signup'}
              className="text-decoration-none text-white "
            >
              Get Started !
            </Link>
            </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="images/fb.jpg"
            className="h-100"
            alt="Home"
          />
        </div>
        
      </div>
    </>
  );
};

export default Home;
