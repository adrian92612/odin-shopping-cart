import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <h1>Amber</h1>
        </Link>
      </div>
      <div>
        <NavLink to={"/products"}>Shop Now</NavLink>
      </div>
    </header>
  );
};

export default Header;
