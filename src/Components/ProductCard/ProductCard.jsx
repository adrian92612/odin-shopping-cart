/* eslint-disable react/prop-types */
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <li>
      <div className="product-card">
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </li>
  );
};

export default ProductCard;
