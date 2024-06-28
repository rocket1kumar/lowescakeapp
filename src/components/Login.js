import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login(){
    var navigate = useNavigate()
    var dispatach = useDispatch()
    var cred = {}

    function handleEmail(e){
        cred.email=e.target.value
    }
    function handlePassword(e){
        cred.password=e.target.value
    }
    function singIn(){
       axios({url:process.env.REACT_APP_APIURL+"/login", data:cred, method:"post"})
       .then((response)=>{
        console.log(response.data)
        if(response.data.token){
          localStorage.token = response.data.token
            dispatach({
              type: "LOGIN_SUCCESS"
            })
            navigate("/")
        } else {
            alert("something is wrong in response")
        }
       }, (error)=>{
        console.log(error.data)
        alert("something is wrong")
       })
    }

    return (
        <div>
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
        <button onClick={singIn} className="btn btn-info">SignIn</button>
      </div>
    
);
}