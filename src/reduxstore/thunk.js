
import axios from "axios";

export function getCakesThunkCreator(){
    return function getCakesThunk(dispatch){
     axios({
         url:process.env.REACT_APP_APIURL+"/allcakes",
         method:"get"
     }).then(function(response){
         console.log("response from all cakes api" , response.data)
         dispatch({
             type:"INIT_CAKES_SUCCESS",
             payload:response.data.data
         })
     }).catch((error)=>{
 
     })
 }
 }

   export function placeOrder(dispatach){

   }
