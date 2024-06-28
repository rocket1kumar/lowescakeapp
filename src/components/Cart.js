import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserTable from "./Usertable";
import { useDispatch, useSelector } from "react-redux";

export default function Cart(){
    var params = useParams()
    var dispatch = useDispatch()
    var totalPrice = 0
    var cartitems = useSelector(state=>state.cartReducer.cartitems)
    console.log("params" , params["*"].split("/"))

    function removeFromCart(){

    }

    useEffect(function(){
        // hit the api to bring cart items 
        axios({
            url:process.env.REACT_APP_APIURL+"/cakecart",
            method:"get",
            headers:{
                Authorization:localStorage.token
            }
        }).then((response)=>{
          dispatch({
                 type:"INIT_CART_ITEMS",
                 payload:response.data.data
             })
        }).catch((errro)=>{

        })
    },[])

     return (
        <div className="container">
        <h1>Cart Items </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {cartitems?.map((each, index) => {
                    totalPrice = totalPrice+each.price*each.quantity
                    return (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{each.name}</td>
                            <td><img src={each.image} style={{ width: "5rem", height: "4rem" }}></img></td>
                            <td>{each.price}</td>
                            <td><button className="btn btn-secondary">+</button>{each.quantity}<button className="btn btn-secondary">-</button></td>
                            <td><button onClick={removeFromCart.bind(this,each.cakeid , index)} className="btn btn-danger">X</button></td>
                        </tr>
                    )
                })}


            </tbody>
        </table>
        <div>
            <h3>Total Price : {totalPrice}</h3>
        <Link to="/checkout"><button style={{float:"right"}} className="btn btn-warning mt-3">Checkout</button></Link>
        </div>
    </div>
    )
}