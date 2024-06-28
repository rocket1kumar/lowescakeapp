import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader"
import { useDispatch } from "react-redux";

export default function CakeDetail(){
    var cakeid = useParams().cakeid
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var [cakedetails,setCakedetails]  = useState()
    var [isAdding,setIsAdding]  = useState()

    function addToCart(){
        setIsAdding(true)
            if(localStorage.token){
                // hit the api with token
                axios({
                    url:process.env.REACT_APP_APIURL+"/addcaketocart",
                    method:"post",
                    headers:{
                        Authorization:localStorage.token
                    },
                    data:{name:cakedetails.name
                        ,cakeid:cakedetails.cakeid,price:cakedetails.price,weight:cakedetails.weight,image:cakedetails.image}
                }).then(function(response){
                    if(response.data.data){
                        dispatch({
                            type:"ADD_TO_CART_SUCCESS"
                        })
                        navigate("/cart")
                    }
                    else{
                        setIsAdding(false)
                    }
                }).catch(function(error){
                        console.log("Error from add to cart api" , error)
                        setIsAdding(false)
                })
            }
            else{
                // navigate to login 
                navigate("/login")
            }
    }

    useEffect(function(){
        axios({
            url:process.env.REACT_APP_APIURL+"/cake/"+cakeid,
            method:"get"
        }).then(function(response){
            console.log(response.data.data)
            setCakedetails(response.data.data)
        })
    },[])
    if(cakedetails){
        return (
            <div class="container mt-5">
            <div class="row">
              {/* <!-- Left column for cake image --> */}
              <div class="col-lg-6">
                <img style={{width:"80%"}} src={cakedetails.image} class="img-fluid" alt="Cake Image" />
              </div>
              {/* <!-- Right column for cake details --> */}
              <div class="col-lg-6">
                <h1>{cakedetails.name}</h1>
                <p>{cakedetails.price} Rs</p>
                {/* <!-- Ratings with star icon --> */}
                <div class="mb-3">
                  <span>Ratings: {cakedetails.ratings}</span>
                </div>
                <div class="mb-3">
                  <span>Reviews: {cakedetails.reviews}</span>
                </div>
                <div class="mb-3">
                  <span>{cakedetails.description} </span>
                </div>
                {/* <!-- Input box for message -->  */}
                <div class="mb-3">
                  <label for="message" class="form-label">Message on Cake:</label>
                  <input type="text" class="form-control" id="message" placeholder="Enter your message" />
                </div>
                <div class="mb-3 row">
                  <button className="btn btn-outline-dark col m-3"> 1Kg</button>
                  <button className="btn btn-outline-dark col m-3"> 2Kg</button>
                  <button className="btn btn-outline-dark col m-3"> 3Kg</button>
                  <button className="btn btn-outline-dark col m-3"> 4Kg</button>
                  <button className="btn btn-outline-dark col m-3"> 5Kg</button>
                </div>
                {/* <!-- Buttons for buy now and add to cart --> */}
                <div class="gap-2 row">
               {!isAdding?<button onClick={addToCart} class="btn btn-warning col" type="button">Add to Cart</button>
                :<button disabled class="btn btn-warning col" type="button">Adding to Cart...</button>}
                </div>
              </div>
            </div>
          </div>
        )
    }
    else{
        return <Loader />
    }

} 