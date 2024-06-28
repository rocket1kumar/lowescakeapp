import React, { useEffect, useState } from "react";
import Newuserlist from "./Newuserlist";
import AddUser from "./AddUser";
import { Link, Outlet } from "react-router-dom";

export default function Admin(){

    useEffect(function(){
        alert("rendered")
        return function(){
            alert("Bye Bye Admin")
        }
    })

    var newusers = [{
        name: "Vipul", gender: "male"}]
        var [newusers, setNewUser] = useState([...newusers])
    function addUser(user){
        console.log(user)
        newusers = [...newusers, {...user}]
        setNewUser(newusers)
        }
    function removeUser(index){
        newusers.splice(index,1);
        setNewUser([...newusers])
    }
return (
    <>
    <h1>Admin Panel</h1>
    <div className="row">
    <div className="col-4">
    <div>
    <Link to="/admin/allusers">All Users</Link>
    </div>
    <div>
    <Link to="/admin/adduser">Add User</Link>
    </div>
    </div>
    <div className="col-8">
    <Outlet />
    </div>
    </div>
    </>
    );
  }
// <AddUser addUser={addUser} />
//<Newuserlist removeUser={removeUser} list = {newusers} mode= "ADMIN" />