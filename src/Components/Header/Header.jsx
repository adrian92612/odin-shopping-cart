/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CollapsedNav from "../CollapseNav/CollapsedNav";
import Cart from "../Cart/Cart";
import "./Header.css";
import { memo } from "react";

const Header = memo(({ state, dispatch }) => {
  return (
    <header>
      <CollapsedNav />
      <Link to={"/"}>
        <h1>Amber</h1>
      </Link>
      <Cart state={state} dispatch={dispatch} />
    </header>
  );
});

export default Header;
