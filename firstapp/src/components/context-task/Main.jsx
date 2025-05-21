import React from 'react'
import Login from "./Login.jsx"
import Home from "./Home.jsx"
import authContext from './auth-context';
import { useContext } from 'react';


function Main() {
  
const {isLoggedin} = useContext(authContext);

  return (
    <div>
      {
            isLoggedin ? <Home></Home>  :  <Login></Login> 
      }
      
    </div>
  )
}

export default Main
