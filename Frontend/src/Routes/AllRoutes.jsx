import React from "react";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "../Components/auth/Forgetpassword";
import { Navbar } from "../Components/HomePage";
import LoginCard from "../Components/auth/LoginCard";
import SignupCard from "../Components/auth/SignupCard";
import Home from "../Pages/Home";
import Hotels from "../Components/Hotelpage/Hoteldetails";


function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginCard />}></Route>
        <Route path="/signup" element={<SignupCard />}></Route>
        <Route path="/resetpassword" element={<Forgetpassword />}></Route>
        <Route path="/hotel" element={<Hotels/>}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
