import React from "react";
import User from "./User";
 export default function UserList(){
var users= ["Vipul", "Vishal", "Mayur", "Reddy"]
var newusers = [{
    name: "Vipul", gender: "male"},
   { name: "habibi", gender: "female"}]
// this will give list of users  
/* return (
    <div>
        <div className="alert alert-warning">{users[0]}</div>
        <div className="alert alert-warning">{users[1]}</div>
        <div className="alert alert-warning">{users[2]}</div>
        <div className="alert alert-warning">{users[3]}</div>
    </div>
 )
    
   /* Same function as above */
 /*  return (
   <div>
   {
    users.map(function(each){
        return <div className="alert alert-info" >{each}</div>
    })
   }
   </div>
   ); */
  
   /* user list in users component 
  
  return (
    <div>
        <User name = {newusers[0].name } gender = {newusers[0].gender} />
        <User name = {newusers[1].name } gender = {newusers[1].gender} />
    </div>
   );*/
   
// using map function
   return (
    <div>
        {
            newusers.map(function(each){
                return <User name={each.name} gender= {each.gender} />
            })
        }
    </div>
   ); 

}