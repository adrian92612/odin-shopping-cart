/* eslint-disable react/prop-types */
import "./ProductCard.css";

const ProductCard = ({ product, handleAddItem }) => {
  return (
    <li>
      <div className="product-card">
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => handleAddItem(product)}>Add to Cart</button>
      </div>
    </li>
  );
};

export default ProductCard;
