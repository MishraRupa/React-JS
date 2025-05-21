import { useState } from "react"

function Map(){
    //creating state variable
    const[state,setState] = useState([<h2>Hello Rupa</h2>,<h2>Rohitu</h2>]);

    function changeContent(){
        setState("Rupaaaaaaaaaaa");

    }
    

    return(
        <div>
            <h3>{state}</h3> //binding state variable

            <button onClick={changeContent}>Click</button>
            
        </div>
    );
}

export default Map;