import { Link } from "react-router-dom"
import store from "../reduxstore/store"
import React from "react"

export default function Paymentmode(){
    var state = store.getState()
    console.log("state" , state)
    return (
        <div>
            <h1>
                Payment
            </h1>
            <p>We are now accepting cash on delivey</p>
           <Link to={"/checkout/checkoutsummary"}><button className="btn btn-warning">Order summary</button></Link> 
        </div>
    )
}