import React from "react";
import { useState } from "react";

export default function AddCake(){
    var cake ={}
    var cakeList= []
    var inputreference = React.createRef()
    var [cakeList, setCakes] = useState([])
    function handleName(e) {
        cake.name = e.target.value
    }
    function handlePrice(e) {
        cake.price = e.target.value
    }
    function handleDelete(e) {
        cake.price = e.target.value
    }
    function addCake() {
      //  var newCake = {...cake}
       console.log("This cake needs to be added", cake)
    //   cakeList = [...cakeList, newCake]
     //    cakeList - [...cakeList, {...cake}]
        cakeList.push({...cake})
         setCakes([...cakeList])
       console.log(cakeList)
    }

    function deleteCake(){
 //  var cakenumber = document.getElementById("deleteinput").value
  var inputelement = inputreference.current
    console.log("this cake needs to be deleted", inputelement.value)
    }
    return (
        <div className="container">
                <h1> Add New Cake</h1>
                <div> 
                    <label>Name</label>
                    <input onChange={handleName} className="form-control" />
                </div>
                <div> 
                    <label>Price</label>
                    <input onChange={handlePrice} className="form-control" />
                </div>
                
                <div> 
                    <button onClick={addCake} className="btn btn-primary" >Add Cake</button>
                </div>
                <div> 
                    <label>Delete</label>
                    <input ref={inputreference} type="number" id="deleteinput" className="form-control" />
                    <button onClick={deleteCake} className="btn btn-primary" >Delete Cake</button>
                </div>
        </div>
    );
}