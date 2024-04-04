/* eslint-disable react/prop-types */
// import { useNavigat } from "react-router-dom";
import { useNavigateToProduct } from "../../Helpers/helpers";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddItem }) => {
  const navigateToProduct = useNavigateToProduct();
  const handleAddItemClick = (e) => {
    e.stopPropagation();
    handleAddItem(product);
  };

  return (
    <>
      <li onClick={() => navigateToProduct(product.id)}>
        <div className="product-card">
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={handleAddItemClick}>Add to Cart</button>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
