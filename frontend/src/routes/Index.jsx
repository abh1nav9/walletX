import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Wallet from '../components/Wallet';

function MainRoutes() {
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/wallet" element={<Wallet />} />
    </Routes>
   
    </>
  )
};

export default MainRoutes;