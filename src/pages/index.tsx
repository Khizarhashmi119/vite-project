import * as React from "react";
import { Link } from "react-router";
import { useAuth } from "../context/auth-context";

function Home() {
  const [count, setCount] = React.useState(0);
  const { isLoggedIn, logout } = useAuth();

  const handleClickBtn: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button onClick={handleClickBtn}>Increment</button>
      {isLoggedIn ? (
        <>
          <Link to="/p/admin/posts">Posts</Link>
          <Link to="/about">About</Link>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </>
      )}
    </div>
  );
}

export default Home;
