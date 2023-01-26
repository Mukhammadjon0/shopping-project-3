import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function ProtectedRouter() {
  const loggedIn = useSelector((state) => state.users.loggedIn);
  return loggedIn ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to={"login"} />
  );
}

export default ProtectedRouter;
