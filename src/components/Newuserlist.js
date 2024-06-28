
import React from "react";
import User from "./User";

export default function Newuserlist({list, mode}){
  
        if(mode=="ADMIN"){
           return (

            <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {list.map(function(each){
        return  <tr>
        <th scope="row">1</th>
        <td>{each.name}</td>
        {each.gender=="male" &&<td> <img src = "male.png" style={{borderRadius:"2%"}}/> </td>}
        {each.gender=="female" &&<td> <img src = "female.png" style={{borderRadius:"2%"}}/> </td>}
        <td><button className="btn btn-manager">X</button></td>
      </tr>
    })}
   
  </tbody>
</table>
</div>
           );
        } else {
            return (
                        <div className="row">
                            {list.map(function(each){
                                return   <User name = {each.name} gender={each.gender} />
                            })}
                          
                        </div>
            );
        }

}