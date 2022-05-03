import React from "react";
import {Route, Routes} from "react-router-dom";
import {GuardRouter} from "@app/router/GuardRouter";
import MuiLogin from "@app-mui/login/components/MuiLogin";
import MuiLayout from "@app-mui/layout/components/MuiLayout";

export const AppRouter:React.FunctionComponent = () => {
  return <Routes>
    <Route path={"/login"} element={<MuiLogin/>}/>
    <Route path={"/"} element={<GuardRouter child={<MuiLayout/>}/>}>

    </Route>
  </Routes>
}