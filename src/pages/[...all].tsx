import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">404 – Page Not Found</h1>
      <p className="mt-4">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
}
