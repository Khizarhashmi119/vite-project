import { useParams } from "react-router";

function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Details {id}</h1>
    </div>
  );
}

export default UserDetails;
