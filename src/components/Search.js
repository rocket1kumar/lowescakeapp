import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cake from "./Cake";
export default function Search(){
    var [query, setQuery] = useSearchParams()
    var text= query.get("q")
    var [cakes, setCakes] = useState([])
    useEffect(function(){
        axios({url:process.env.REACT_APP_APIURL+"/searchcakes?q="+text, 
            method:"get"
        }).then((res)=>{
            console.log(res.data.data)
            setCakes(res.data.data)
        }, (err)=>{
            console.log(err.message)
        })
    },[text])  // use empty array to prevent to much calls api

    return(
        <div>
          <h1>Search Component</h1>
         {cakes.map(function(each){
            return <Cake data={each}/>
         })}
         </div>
    );
}