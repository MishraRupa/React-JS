import React from 'react'
import C from './C';

function B() {
    var bstyles={
        boxShadow:"0  0 10px red",
        textAlign:"center",
        width:"700px",
        padding:"20px",
        margin:"23px",

    };



  return (
    <div style={bstyles}>
      <h2>B Component</h2>
      <C/>
    </div>
  )
}

export default B
