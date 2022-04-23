import React from "react";
import LoginPage from "@pages/LoginPage";
import HomePage from "@pages/HomePage";
import {Navigate, Route, Routes} from "react-router-dom";

interface GuardProps {
  children: JSX.Element;
}

const GuardRoute = (prop?: GuardProps) => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? prop.children : <Navigate to="/login"/>;
}

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={ <GuardRoute children={<HomePage/>}/> } />
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}