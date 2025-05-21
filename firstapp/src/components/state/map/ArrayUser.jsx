import { useState } from "react" ;
  //useState is a hook for  creating state variable
import {names} from "./userNameData";

function ArrayUser(){
// var [user]= useState(["Rupa","Rohit","Riya","Rama","Raju",
//     "Rupa","Rohit","Riya","Rama","Raju","Rupa","Rohit","Riya","Rama","Raju"
// ])
var [user]= useState(names);

    return(
        <div>
            {/* for stic array elements */}
            {/* <ol>
           <li>{user[0]}</li>
            <li>{user[1]}</li>
            <li>{user[2]}</li>
            <li>{user[3]}</li>
            <li>{user[4]}</li>
            </ol> */}
            {/* for dynamic array ellents we have to use map function */}
            <ol>
                {user.map((element)=>{
                    return <li>{element}</li>;

                })}

            </ol>

        </div>
    )

    

}

export default ArrayUser