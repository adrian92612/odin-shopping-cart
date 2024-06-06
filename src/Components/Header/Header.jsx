/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Header.css";
import CollapsedNav from "./CollapseNav/CollapsedNav";
import Cart from "./Cart/Cart";

const Header = ({ cartItems, setCartItems }) => {
  return (
    <header>
      <CollapsedNav />
      <Link to={"/"}>
        <h1>Amber</h1>
      </Link>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </header>
  );
};

export default Header;
