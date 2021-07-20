import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, user, isProtected, children }) => {
  if ((user && isProtected) || (!user && !isProtected)) {
    return <Route path={path}>{children}</Route>;
  }
  return <Redirect to={isProtected ? "/login" : "/landing"} />;
};

export default ProtectedRoute;
