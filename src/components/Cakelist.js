import React, { useEffect, useState } from "react";
import Cake from "./Cake";
import axios from "axios";
import { getCakesThunkCreator } from "../reduxstore/thunk";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

/* export default function Cakelist(props){
    var dispatch = useDispatch()

  //  var cakeObject = [
   //     {name:"chocolate cake", price : "450", image:"cake.jpeg", eggless:"true"},
    //    {name:"bluberry cake", price : "650", image:"blueberrycake.png", eggless:"false"}
    // ]
/*
    return (
        <div>
        <Cake data={cakeObject[0]} />
        <Cake data={cakeObject[1]} />
        </div>
    );
    */
    //var[cakes, setCakes] = useState();
 /*   var cakes = useSelector(state=>state.cartReducer.cakes)
    
    useEffect(function(){
       
        dispatch(getCakesThunkCreator)
       
    },[])
    //useEffect()

   function getCakes(){
   /*  axios({url:process.env.REACT_APP_APIURL+"/allcakes", method:"get"})
    .then((res)=>{
        console.log(res.data)
        setCakes(res.data.data)
    }, (err)=>{
        console.log(err.data)
        alert("something is wrong")
    }) */

  /*  } 
   function removeCake(name){

        alert ("do yo want to remove"+ name)
   }
   return (
    <div className="row m-2">
        {cakes?.map(function(each, index){
            return <Cake key=[index] removeCake= {removeCake} data={each}/>
        })}
    </div>
   );
} */

   export default function Cakelist() {
    var cakes = useSelector(state=>state.cartReducer.cakes)
    var dispatch = useDispatch()

    useEffect(function(){
        if(!cakes){
            dispatch(getCakesThunkCreator())
        }
    },[])
  

    function removeCake(name) {
        alert(name)
    }

    if(cakes){
        return (
            <div className="row m-2">
                {cakes.map(function (each,index) {
                    return <Cake key={index} removeCake={removeCake} data={each} />
                })}
            </div>
        )
    }
    else{
        return (
            <Loader />
        )
    }

    
}