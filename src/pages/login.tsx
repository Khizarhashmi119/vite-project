import { Navigate } from "react-router";
import { useAuth } from "../context/auth-context";

function Login() {
  const { isLoginLoading, isLoggedIn, login } = useAuth();

  if (isLoginLoading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login("admin")}>Admin Login</button>
      <button onClick={() => login("user")}>User Login</button>
    </div>
  );
}

export default Login;
