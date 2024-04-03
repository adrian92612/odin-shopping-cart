import { Outlet, useOutletContext } from "react-router-dom";
import CategoryLinks from "../CategoryLinks.jsx/CategoryLinks";
import { useState } from "react";

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <CategoryLinks />
      <Outlet context={useOutletContext()} /> {/*Categories*/}
    </div>
  );
};

export default Products;
