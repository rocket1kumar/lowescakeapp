import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
export default function Navbar() {
  var searchtext
  var navigate = useNavigate()
  var isloggedin = useSelector(state=>state.AuthReducer.isloggedin)
  var cartlength= useSelector(state=>state.cartReducer.cartlength)
  console.log(cartlength)
  function handleText(e){
    searchtext = e.target.value
  }
  function searchCake(){
    navigate("/search?q="+searchtext)
  }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
    <Link class="navbar-brand" to="/">Lowe's Cake Cafe</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleText}></input>
        <button class="btn btn-outline-success" type="button" onClick={searchCake}>Search</button>
      </form>
     {/* <div className= "d-flex">
        <Link to="/admin"><button className="btn btn-info" >Admin Panel</button></Link>
      </div> */}
      <form class="d-flex" role="search">
        {isloggedin==false &&  <Link to="/login"><button class="btn btn-primary" type="button">Login</button></Link>}
        {isloggedin==true && <Link to="/admin"> <button class="btn btn-warning" type="button">Admin Panel</button> </Link>}
        {isloggedin==true && <button class="btn btn-danger" type="button">Logout</button>}
      </form>
    </div>
  </div>
  <div>
    <Link to={"/cart"}><button className=" btn btn-info">Cart{"["+cartlength+"]"}</button></Link>
  </div>
</nav>
    );
}