import React from "react";
import {Navigate} from "react-router-dom";

interface GuardRouteProps {
  children: JSX.Element;
}

export const GuardRoute: React.FunctionComponent<GuardRouteProps> = (props: GuardRouteProps) => {
  const {children} = props;
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? children : <Navigate to={"/login"}/>;
}