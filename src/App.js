import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserPage from './components/UserPage';
import Chat from './components/Chat';
import {Switch, Route, Redirect} from 'react-router-dom';

const App=() => {
    return (
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/chat" component={Chat} />
          <Redirect to="/"/>
        </Switch>
      </>
    );
  }

export default App;
