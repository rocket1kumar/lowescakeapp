import React from "react";
//import { Reducer1 } from "./reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer1 as AuthReducer, Reducer2 as cartReducer } from "./reducer";

var store = configureStore({
  //  reducer: Reducer1
  reducer: combineReducers({AuthReducer, cartReducer})
})

export default store
