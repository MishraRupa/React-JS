import React from 'react'
import B from './B';
import { useState } from 'react';
import myContext from './context';

function A() {
    const [state,setState]=useState("Hello Rupa");


    var astyles={
        boxShadow:"0  0 10px green",
        textAlign:"center",
        width:"800px",
        padding:"20px",

    };



  return (
    <div style={astyles}>
     <h2>A Component</h2>
    <button onClick={()=>{
        setState("hii context");
    }}>Update Data</button>

     <myContext.Provider value={state}>
        <B/>
     </myContext.Provider>
    </div>
  )
}

export default A
