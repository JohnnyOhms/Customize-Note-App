import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContex";

export default function PrivateRoute({ element: Element, ...rest }) {
  // const { currentUser } = useAuth();

  return (
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     return currentUser ? <Element {...props} /> : <Navigate to="/login" />;
    //   }}
    // ></Route>
    <Route>{...rest}</Route>
  );
}
