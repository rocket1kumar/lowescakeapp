import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    var navigate = useNavigate()
    var [error, setError]  = useState()
    var [response, setMessage]  = useState()
    var user = {}

    function handleEmail(e){
        user.email=e.target.value
    }
    function handlePassword(e){
        user.password=e.target.value
    }
    function handleName(e){
        user.name=e.target.value
    }
    function createAccount(){
       debugger
      axios({url:process.env.REACT_APP_APIURL+"/register", data:user, method:"post"})
      .then((response)=>{
        console.log(response.data)
        alert(response.data.message)
        navigate("/login")
      }, (error)=>{
        console.log(error.data)
        alert(response.data.message)
      })
    }

    return(
        <div>
            <label> Create An Account</label>
            <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputname" onChange={handleName}/>
        </div>
      </div>
        <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail" onChange={handleEmail}/>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" onChange={handlePassword}/>
        </div>
       
        </div>
        <button onClick={createAccount} className="btn btn-info">Create Account</button>
        </div>
    );

}