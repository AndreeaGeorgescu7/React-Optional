import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
import Menu from './components/Menu';
import Login from './pages/Login';
import Profile from './pages/MyProfile';
import ProtectedRoute from './components/ProtectedRoute';
import React, {useState} from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const userReducer = function (state = null, action) {
  switch (action.type) {
    case "LoggedIn":
      return "User";
    default:
      return state;
  }
};
let store = createStore(userReducer);

const Component = () => <h1>Hello Redux!</h1>;

const Container = connect()(Component);

function App() {

 
 const isSignedIn=0;


  return (
 
    <BrowserRouter>
  
        <div>
         
        <Menu></Menu> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products}  />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/my-profile">{<Profile />}</Route>
            {/* <Route exact path="/my-profile" element={
            <ProtectedRoute isSignedIn={isSignedIn}>  {<Profile />}  </ProtectedRoute>} />  */}
      
        </Switch>
         
       
        </div> 
      
          
  </BrowserRouter>  

  );
}  

export default App;
