/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist...</p>
      <Link to={`/`}>Go to Home Page</Link>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <div>
      <h1>Something happened...</h1>
      <Link to={`/`}>Go to Home Page</Link>
    </div>
  );
};

export { NotFound, ErrorPage };
