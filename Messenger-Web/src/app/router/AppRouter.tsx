import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import HomePage from "@pages/HomePage";

export const AppRouter: React.FC = () => {
  const token = localStorage.getItem("accessToken");
  return (
    <Routes>
      <Route path="/" element={ token? <HomePage/> : <Navigate to={"login"} /> }/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}