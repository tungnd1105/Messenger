import {Navigate} from "react-router-dom";
import React from "react";

interface GuardRouterProps {
  child: JSX.Element
}

export const GuardRouter:React.FunctionComponent<GuardRouterProps> = (props?: GuardRouterProps) => {
  const {child} = props
  const token = localStorage.getItem("accessToken")
  return token ? child : <Navigate to="/login"/>
}