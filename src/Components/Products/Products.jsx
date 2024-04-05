import { Outlet, useOutletContext } from "react-router-dom";
import CategoryLinks from "../CategoryLinks.jsx/CategoryLinks";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <CategoryLinks />
      <Outlet context={useOutletContext()} /> {/*Categories*/}
    </div>
  );
};

export default Products;
