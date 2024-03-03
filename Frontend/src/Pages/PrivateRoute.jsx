import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Profile from "./Profile";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { currentUser, setCurrentUser } = useContext(ShopContext);
  return(
    currentUser.email && currentUser.name && currentUser.id ? <Outlet/> : <Navigate to={"/login"}/>
  )
}

export default PrivateRoute;
