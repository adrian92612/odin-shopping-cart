/* eslint-disable react/prop-types */
// import { useNavigat } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useNavigateToProduct } from "../../Helpers/helpers";
import { AddToCartIcon } from "../SVG/Icons";
import { toast } from "react-toastify";
import { ACTIONS } from "../Root/Root.jsx";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const navigateToProduct = useNavigateToProduct();
  const { dispatch } = useOutletContext();

  const handleAddItemClick = (e) => {
    e.stopPropagation();
    toast.success(`${product.title} has been added to your cart!`);
    dispatch({ type: ACTIONS.ADD_ITEM, payload: { product: product } });
  };

  return (
    <li onClick={() => navigateToProduct(product.id)}>
      <div className={styles.card}>
        <div>
          <img src={product.image} alt="" />
        </div>
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
