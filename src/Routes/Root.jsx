import { Outlet, Link, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <div className="blur-overlay"></div>
      <header>
        <nav>
          <NavLink />
        </nav>
      </header>
      <main>
        <Link to={`/`}>Home</Link>
        <Link to={`/shop`}>Shop</Link>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
