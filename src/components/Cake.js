import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NetWorth } from "../App";
export default function Cake(props) {

    var data = {
        name : "Chocolate Truffle",
        src : "cake.jpeg",
        des: "chcolate cake of truffle flavour",
        price: "750",
        eggless: true
    }
    var paisa = useContext(NetWorth)
    console.log("paisa , paisa" , paisa)
    var label 
    console.log("props" , props)
  
    // props.data?.name   data? is to check not null
  var label 
if(props.data?.eggless=='true'){
    label = "eggless"
}  else label = "contains egg"
  function removeItem(){
    props.removeCake(props.data.name)
  }
  console.log(props.data.cakeid)
    return (
        <div class="card m-3" style={{ width: "23rem" }}>
        <button onClick={removeItem} className="btn btn-danger">X</button>
       <Link to= {"/details/"+props.data.cakeid} > <img src={props.data?.image} style={{height:"16rem"}} />
       </Link>
        <div className="card-body">
          <h5 className="card-title">{props.data?.name}</h5>
          <p class="card-text">{props.data?.price}</p> 
           {label}
         </div>
        </div>
    );
}

// When we do not want whole object specific data then we will use curley braces
//export default function Cake({data}) {

  //  var data = {
    //    name : "Chocolate Truffle",
      //  src : "cake.jpeg",
        // des: "chcolate cake of truffle flavour",
       //  price: "750"
  //   }
    // props.data?.name   data? is to check not null
   //  return (

   //     <div class="card" style={{"width": "18rem"}}>
    //    <img src={data?.image} class="card-img-top" alt="..."/>
   //     <div class="card-body">
  //        <h5 class="card-title">{data?.name}</h5>
  //        <p class="card-text">{data.des}.</p>
   //       <a href="#" class="btn btn-primary">{data?.price}</a> 
  //      </div>
  //    </div>
 //   );
// }