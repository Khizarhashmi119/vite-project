import { useParams } from "react-router";

function PostDetails() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Post Details {postId}</h1>
    </div>
  );
}

export default PostDetails;
