import React from "react";
import Newuserlist from "./Newuserlist";

export default function Meeting(){
    var newusers = [{
        name: "Vipul", gender: "male"},
       { name: "habibi", gender: "female"}]
return (
    <Newuserlist list = {newusers} mode= "MEETING" />
);
}