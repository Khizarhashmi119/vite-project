import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function AdminRoute(props: React.PropsWithChildren) {
  const { children } = props;
  const { isLoggedIn, isLoginLoading, role } = useAuth();

  if (isLoginLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
