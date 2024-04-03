import { useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, handleAddItem } = useOutletContext();
  const product = products.find((item) => item.id === +productId);

  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <button onClick={() => handleAddItem(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
