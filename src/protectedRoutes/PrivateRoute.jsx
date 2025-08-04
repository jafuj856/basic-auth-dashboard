import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import pb from "../lib/pb";

function PrivateRoute() {
  const isLoggedIn = pb.authStore.isValid;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
