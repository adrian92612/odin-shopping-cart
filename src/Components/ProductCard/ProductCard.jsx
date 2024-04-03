/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddItem }) => {
  const navigate = useNavigate();
  const handleCardClick = () => navigate(`/products/item/${product.id}`);
  const handleAddItemClick = (e) => {
    e.stopPropagation();
    handleAddItem(product);
  };

  return (
    <>
      <li onClick={handleCardClick}>
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
