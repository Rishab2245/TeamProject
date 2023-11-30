import React from "react";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";

const Protect = () => {
    const location = useLocation();
    const token = location.state?.auth;
    const isAuthenticated = token !== undefined;

    return isAuthenticated ? (
        <Dashboard />
    ) : (
        <Navigate to={'/login'} />
    )

}

export default Protect;