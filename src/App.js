import React,{useContext} from 'react';
// import HomePage from './components/HomePage'
// import Home from './components/Home';
// import About from './components/About';
// import UserProfile from './components/UserProfile';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import UserPage from './components/UserPage';
// import Chat from './components/Chat';
import Home from './pages/Home'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Users from './pages/Users';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import AppShell from './AppShell';

const AuthenticatedRoute = ({children, ...rest}) => {
  const authContext = useContext(AuthContext);
  return (
    <Route {...rest} render={() => 
      authContext.isAuthenticated() ? (
        <AppShell>
          {children}
        </AppShell>
      ): (
        <Redirect to="/" />
      )
    } />
  )
}

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" exact component={Home}/>
        <AuthenticatedRoute path="/userpage">
          <Users />
        </AuthenticatedRoute>
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
