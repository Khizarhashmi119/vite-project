/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { useNavigate } from "react-router";

const AuthContext = React.createContext<{
  isLoginLoading: boolean;
  isLoggedIn: boolean;
  role: string | null;
  login: (role: string) => void;
  logout: () => void;
}>({
  isLoginLoading: true,
  isLoggedIn: false,
  role: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props: React.PropsWithChildren) => {
  const { children } = props;
  const navigate = useNavigate();
  const [isLoginLoading, setIsLoginLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [role, setRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    if (isLoggedIn === "true") {
      setIsLoggedIn(true);

      if (role === "null") {
        setRole(null);
      } else {
        setRole(role);
      }
    }

    setIsLoginLoading(false);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  React.useEffect(() => {
    localStorage.setItem("role", role || "null");
  }, [role]);

  const login = (role: string) => {
    setIsLoginLoading(true);
    setIsLoggedIn(true);
    setRole(role);
    navigate("/p/posts");
    setIsLoginLoading(false);
  };

  const logout = () => {
    setIsLoginLoading(true);
    setIsLoggedIn(false);
    setRole(null);
    navigate("/login");
    setIsLoginLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoginLoading,
        isLoggedIn,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
export default AuthContextProvider;
