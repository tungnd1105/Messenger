import React from "react";
import {Route, Routes} from "react-router-dom";
import {GuardRoute} from "@config/router/GuardRoute";
import {MuiApp} from "@app-mui/app/components/MuiApp";
import MuiLogin from "@app-mui/login/components/MuiLogin";

export const AppRoutes:React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<MuiLogin/> }/>
      <Route path={"/"} element={<GuardRoute children={ <MuiApp/>} /> }/>
    </Routes>
  )
}