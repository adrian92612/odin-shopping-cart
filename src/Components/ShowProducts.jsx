/* eslint-disable react/prop-types */

const ProductCard = ({ product, handleClick }) => {
  return (
    <li>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "auto" }} />
      <p>
        ${product.price} - {product.rating.rate} stars ({product.rating.count} reviews)
      </p>
      <p>{product.description}</p>
      <button onClick={() => handleClick(product)}>Add to Cart</button>
    </li>
  );
};

export default function ShowProducts({ products, handleClick }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleClick={handleClick} />
      ))}
    </ul>
  );
}
