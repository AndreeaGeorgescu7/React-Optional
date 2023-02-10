import React from 'react'
import { Redirect ,Navigate, NavLink } from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";

function ProtectedRoute({ isSignedIn, children }) {
    const location = useLocation();
   
  if (!isSignedIn) {

    return <Redirect to="/register" state={{ from: location }} />
  }
  return children
}
export default ProtectedRoute