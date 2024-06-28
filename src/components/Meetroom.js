import React ,{ useState } from "react";
// state and hooks
export default function MeetRoom(){
   
    var [salary,Manager] = useState(1000)
    var [users, setUsers]  = useState(0)

   function attendTrainnigReact(){
       
    Manager(salary+100)
    setUsers(users+1)
   }
    return (
<div>
    <h1>People Joined</h1>
    <button onClick={attendTrainnigReact} className="btn btn-info">Join Meeting: {users}</button>
</div>
    );
}