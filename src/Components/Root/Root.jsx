import { Link, NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <Link to={"/"}>
          <h1>Amber</h1>
        </Link>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Some Footer</p>
      </footer>
    </>
  );
};

export default Root;
