import "./Task1.css"
//first step to create state in react
import { useState } from "react";
function Task1(){
//2 step to call usestate function & it will return 1stateVariable & 1 function
    // var info =useState("Welcome To React JS");
    //info=[state,setterFxn]
    //info[0];
    var [state,stateFxn] =useState("Welcome To React JS");  //destructuring of array 

    
    function changeContent(){
        // alert("working");
        //using JS DOM
    //    var h1DomElement= document.querySelector("h1");
    //    h1DomElement.innerText="Hii React JS";

    //using react setter fxn  ---used to update state variable
    //   info[1]("Hey Rupa");
    stateFxn("Hey Rupa");

      
    }

    return(
        <div className="task1">
            {/* <h1>Welcome To React JS</h1> */}
              {/* <h1>{info[0]}</h1> */}
             {/* <--- binding of state variable---> */}
              <h1>{state}</h1>



            <button onClick={changeContent}>Action</button>
        </div>
    )
}

export default Task1;