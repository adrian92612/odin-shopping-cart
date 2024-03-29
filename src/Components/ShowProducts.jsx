/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <li>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "auto" }} />
      <p>
        ${product.price} - {product.rating.rate} stars ({product.rating.count} reviews)
      </p>
      <p>{product.description}</p>
    </li>
  );
};

export default function ShowProducts({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
