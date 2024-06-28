
import './App.css';
import React from "react";
import AddCake from './components/Addcake';
import Cake from './components/Cake';
import Cakelist from './components/Cakelist';
import Home from './components/Home';
import MeetRoom from './components/Meetroom';
import Admin from './components/Admin';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Signup from './components/Signup';
import Newuserlist from './components/Newuserlist';
import UserTable from './components/Usertable';
import AddUser from './components/AddUser';
import Search from './components/Search';
import Navbar from './components/Navbar';

import Cart from './components/Cart';
import CakeDetail from './components/CakeDetails';
import Checkout from './components/Checkout';
import AddAddress from './components/AddAddress';
import Paymentmode from './components/PaymodeMode';
import CheckoutSummary from './components/CheckoutSummary';


var sampledata=[{name:"vipul", gender:"male", email:"adad@kjhf.com"}]
var isAdmin=true
export var NetWorth = React.createContext()
function App() {
    function alertMe(){
      alert ("caught you")
    }

//   return (
  //  <div className="App">
    //  <Home alertMe = {alertMe}/>
    // </div>
 //);
// return (
 // <MeetRoom />
 //);
  return (
  <div className='App'>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<NetWorth.Provider value="300 million dollars">< Home /></NetWorth.Provider>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>

      <Route path="/admin" element={<Admin/>}>
        <Route path="allusers" element={<UserTable data={sampledata}/>}/>
        <Route path="adduser" element={<AddUser />}/>
      </Route>
    
       {localStorage.token && <Route path="/cart/*" element={<Cart />} /> }

      <Route path="/details/:cakeid" element={<CakeDetail />}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/search" element={<Search/>}/>

      <Route path="/checkout" element={<Checkout />}>
              <Route path="" element={<AddAddress />} />
              <Route path="addaddress" element={<AddAddress />} />
              <Route path="paymentmode" element={<Paymentmode />} />
              <Route path="checkoutsummary" element={<CheckoutSummary />} />
          </Route>
    </Routes>
    </BrowserRouter>
  </div>
 ); 
}


      

export default App;
