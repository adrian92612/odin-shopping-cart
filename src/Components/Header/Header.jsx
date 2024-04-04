import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="divider">
        <Link to={"/"}>
          <h1>Amber</h1>
        </Link>
      </div>
      <div className="divider">
        <Link to={"/products"}>
          <h2>Products</h2>
        </Link>
      </div>
      <div className="divider"></div>
    </header>
  );
};

export default Header;
