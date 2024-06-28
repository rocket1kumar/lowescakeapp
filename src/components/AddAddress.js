import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddAddress(){
    var userdetails ={}
    var dispatch= useDispatch()
    var navigate= useNavigate()

    function handleDetails(e){
        userdetails [e.target.name]= e.target.value
    }

    function addAddress(){
         console.log(userdetails)
         dispatch({
            type:"ADD_USERDETAILS",
            payload:userdetails
         })
         navigate("/checkout/paymentmode")
    }

    return(
        <div>
            <div>
                <label>Name</label>
                <input onChange={handleDetails} className="form-control" name="name"/>
            </div>
            <div>
                <label>Address</label>
                <input onChange={handleDetails} className="form-control" name="address"/>
            </div>
            <div>
                <label>City</label>
                <input onChange={handleDetails} className="form-control" name="city"/>
            </div>
            <div>
                <label>Pincode</label>
                <input onChange={handleDetails} className="form-control" name="pincode"/>
            </div>
            <div>
                <label>Phone</label>
                <input onChange={handleDetails} className="form-control" name="phone"/>
            </div>
            <div>
                <button onClick={addAddress} type="button" className="btn btn-primary">Add Address</button>
            </div>
        </div>
    );
}