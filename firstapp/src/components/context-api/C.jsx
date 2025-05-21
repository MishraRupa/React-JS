import React from 'react'
import D from './D';
import { useContext } from 'react';
import myContext from './context';

function C() {
 var cstyles={
        boxShadow:"0  0 10px blue",
        textAlign:"center",
        width:"500px",
        padding:"20px",
         margin:"50px",

    };

   var data= useContext(myContext);



  return (
    <div style={cstyles}>
      <h2>C Component : {data}</h2>
      
      <D/>
    </div>
  )
}

export default C
