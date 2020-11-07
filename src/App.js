// import React from 'react';
import HomePage from './components/HomePage'
import Home from './components/Home';
// import About from './components/About';
// import UserProfile from './components/UserProfile';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import UserPage from './components/UserPage';
// import Chat from './components/Chat';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Signup from './pages/Signup';
import AuthDebugger from './components/AuthDebugger'
import Login from './pages/Login';
import Users from './pages/Users';
import { AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import AppShell from './AppShell';

const AppRoutes = () => {
  return (
    <>
      <HomePage/>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/userpage">
          <AuthDebugger />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <AppShell>
            <Users />
          </AppShell>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <div className="bg-gray-100">
            <AppRoutes />
          </div>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

// const App=() => {
//     return (
//       <>
//         <NavBar/>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/userprofile" component={UserProfile} />
//           <Route exact path="/signup" component={SignUp} />
//           <Route exact path="/signin" component={SignIn} />
//           <Route exact path="/userpage" component={UserPage} />
//           <Route exact path="/chat" component={Chat} />
//           <Redirect to="/"/>
//         </Switch>
//       </>
//     );
//   }

export default App;
