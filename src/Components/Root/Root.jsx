import { Link, NavLink } from "react-router-dom";
import "./Root.css";
import Main from "../Main/Main";

const Root = () => {
  return (
    <div className="root">
      <header>
        <Link to={"/"}>
          <h1>Amber</h1>
        </Link>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </header>
      <Main />
      <footer>
        <p>Some Footer</p>
      </footer>
    </div>
  );
};

export default Root;
