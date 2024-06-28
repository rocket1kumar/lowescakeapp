import React from "react";
import store from "../reduxstore/store";

export default function CheckoutSummary(){
    var state = store.getState()
    var cakes =state.cartReducer.cartitems
    console.log("cakes are", cakes.name)

    return (
        <div>
            <h1>
                Confirm Order
            </h1>

        </div>
    )
}