
import React from "react";
import User from './User';
import Cake from './Cake';
import Navbar from './Navbar';
import Carousel from './Carousel';
import UserList from './Userlist';
import Cakelist from './Cakelist';
import Meeting from './Meeting';
import Admin from './Admin';
import AddCake from './Addcake';
import Login from "./Login";

export default function Home(props){
    
// passing of function from parent to child 
    return (
        <div>
         <Carousel />
        <div className="container-fluid">
            <Cakelist/>
        </div>
        </div>
    )
}

// <Cake name:"vanilla cake", price : "450", image:"cake.jpeg"/>
//<User name = "Vipul" gender = "male"/>
// <Cake data = {cakeObject}/>