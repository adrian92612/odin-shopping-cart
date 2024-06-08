/* eslint-disable react/prop-types */
// import { useNavigat } from "react-router-dom";
import { useNavigateToProduct } from "../../../../Helpers/helpers";
import { AddToCartIcon } from "../../../SVG/Icons";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, handleAddItem }) => {
  const navigateToProduct = useNavigateToProduct();
  const handleAddItemClick = (e) => {
    e.stopPropagation();
    handleAddItem(product);
  };

  return (
    <li onClick={() => navigateToProduct(product.id)}>
      <div className={styles.card}>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>
          Rating:{product.rating.rate}⭐ ({product.rating.count})
        </p>
        <button onClick={handleAddItemClick}>
          Add to Cart <AddToCartIcon />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
