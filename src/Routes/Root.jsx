import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to={`/`}>Home</Link>
      <Link to={`/shop`}>Shop</Link>
      <Outlet />
    </div>
  );
}
