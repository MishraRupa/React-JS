
import Profile from "./components/state/Profile/Profile"
import Task1 from "./components/state/Task1"
import Task2 from "./components/state/Task2"
import Task3 from "./components/state/Task3"
import ArrayData from "./components/state/map/ArrayData"
import Map from "./components/state/map/Map"
import ArrayUser from "./components/state/map/ArrayUser"
import UserCard from "./components/state/map/UserCard"
import Products from "./pages/products/Products.jsx"
import A from "./components/context-api/A.jsx"

import Nav from "./components/context-task/Nav.jsx"
import Main from "./components/context-task/Main.jsx"
import { useState } from 'react'
import authContext from "./components/context-task/auth-context.js"


function App() {
  
  const [isLoggedin,setLoggedin] = useState(false);

  const login= ()=>{
    setLoggedin(true)

  };

  const logout= ()=>{
    setLoggedin(false)

  };

  const myData={
    logout,
    login,
    isLoggedin,

  };

  return (
    <div>
      <authContext.Provider value={myData}>
         {
        isLoggedin?  <Nav /> :null

      }
     
      <Main />

      </authContext.Provider>


      
    

      {/* <Login></Login> */}
    
      {/* <A/> */}
      {/* <Products/> */}

     {/* {<UserCard></UserCard>}  */}
     {/* { <ArrayUser/>} */}
      {/* {<ArrayData/>} */}
      {/* <Map /> */}
      {/* <Profile /> */}
      {/* <Task3 /> */}
     {/* <Task2 />
     <Task1 /> */}
    </div>
   
  )
}

export default App //default export
