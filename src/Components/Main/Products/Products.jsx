import { Outlet, useOutletContext } from "react-router-dom";
import CategoryLinks from "./CategoryLinks.jsx/CategoryLinks";

const Products = () => {
  return (
    <div>
      <CategoryLinks />
      <Outlet context={useOutletContext()} /> {/*Categories*/}
    </div>
  );
};

export default Products;
