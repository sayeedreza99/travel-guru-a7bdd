import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './component/Contact/Contact';
import Hotel from './component/Hotel/Hotel';
import LogIn from './component/Login/LogIn';
import Navbar from './component/NavBar/NavBar';
import News from './component/News/News';
import SignUp from './component/SignUp/SignUp';
import Destination from './component/Destination/Destination';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/news'>
              <News></News>
            </Route>
            <Route path='/destination'>
              <Destination></Destination>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/hotel'>
              <Hotel></Hotel>
            </PrivateRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
