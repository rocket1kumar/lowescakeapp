import React from "react";
export default function User({name, gender}) { 
  //  var name = "vipul"
//  {gender == "male" &&   <img src = "male.jpeg" style={{borderRadius:"2%"}}/> }  constional rendering if true
    return (

        <div class = "card" style={{"width":"15rem"}}>
            {gender == "male" &&   <img src = "male.png" style={{borderRadius:"2%"}}/> }
            {gender == "female" &&   <img src = "female.png" style={{borderRadius:"2%"}}/> }
            <label><h1>{name}</h1></label>

        </div>
    );
}

// <User name = "value of the username">