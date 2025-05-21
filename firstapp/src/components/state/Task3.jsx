import React, { useState } from "react";

function Task3(){
    //var countVal = 0;  //this is the problem with normal varibale
    //to solve that we have  to use state varibale as it updated the variable
    //as well as rendering(DOM)
    var [countVal,setCount]=useState(0);
    function increaseCount(){
         setCount(countVal+1);
        //console.log(countVal);
        //countVal++; //only variable is updated not DOM
        //console.log(countVal);

    }

    return(
        <div style={{padding:"100px"}}>
            <h3>Setter Concept : {countVal}</h3>
            <button onClick={increaseCount}>increase count</button>

        </div>
    );
}

export default Task3;