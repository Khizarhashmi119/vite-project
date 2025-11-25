import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/p/admin/posts/1">P1</Link>
      <br />
      <Link to="/p/admin/posts/2">P2</Link>
      <br />
    </div>
  );
}

export default Posts;
