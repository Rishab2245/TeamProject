import React from "react";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";

const Protect = ({ Component, Other }) => {
    const token = Cookies.get('token');
    let isAuthenticated
    if (token) {
        isAuthenticated = true;
    }
    else {
        isAuthenticated = false;
    }
    const navigate = useNavigate();
    if (isAuthenticated) {
        return (
            <>
                {Component}
            </>
        )
    }
    else {
        return (
            <Navigate to={'/login'} />
        )
    }

}

export default Protect;