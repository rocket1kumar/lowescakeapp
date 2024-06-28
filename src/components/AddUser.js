import React from "react";
import { useEffect, useState } from "react";
export default function AddUser(props){
   // var user = {}
   console.log("props", props)
   var [user, setUser] = useState({})

    function handleGender(e){
        console.log(",,,", e.target.value)
        user.gender=e.target.value
    }
    function handleName(e){
        user.name=e.target.value
    }
    function addUser(){
        props.addUser(user)
    }

    return (
        <div className="container">
        <h1> Add New User</h1>
        <div> 
            <label>Name</label>
            <input onChange={handleName} className="form-control" />
        </div>
        <div> 
            <label>Gender</label>
            <select onChange={handleGender} className="form-control" >
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             </select>
        </div>
        
        <div> 
            <button onClick={addUser} className="btn btn-primary" >Add User</button>
        </div>
        </div>
    );

}