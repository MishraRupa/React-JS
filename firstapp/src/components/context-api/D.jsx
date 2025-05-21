import React from 'react'
import E from './E';

function D() {
  var dstyles={
        boxShadow:"0  0 10px pink",
        textAlign:"center",
        width:"400px",
        padding:"10px",
         margin:"60px",

    };



  return (
    <div style={dstyles}>
      <h2>D Component</h2>
      <E/>
    </div>
  )
}

export default D
