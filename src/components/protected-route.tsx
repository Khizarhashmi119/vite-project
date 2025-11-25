import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function ProtectedRoute(props: React.PropsWithChildren) {
  const { children } = props;
  const { isLoggedIn, isLoginLoading } = useAuth();
	console.log({children, type: typeof children});

  if (isLoginLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
