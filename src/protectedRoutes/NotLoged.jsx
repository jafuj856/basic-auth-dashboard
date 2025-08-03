import React from "react";
import pb from "../lib/pb";
import { Navigate, Outlet } from "react-router-dom";

function NotLoged() {
  const isLoggedIn = pb.authStore.isValid;
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default NotLoged;
