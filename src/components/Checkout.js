import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Checkout(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">

                    <div>Add Address</div>
                    <div>Payment Mode</div>
                    <Link to ={"/checkout/checkoutsummary"}><div>Checkout Summary</div></Link>

                </div>
                <div className="col-8">

                    <Outlet />
                </div>
            </div>

        </div>
    )
}