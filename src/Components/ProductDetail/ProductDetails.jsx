import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, handleAddItem } = useOutletContext();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (!products.length) {
      getItem();
    } else {
      const foundItem = products.find((item) => item.id === +productId);
      setItem(foundItem);
    }
  }, [productId, products]);

  return (
    <>
      {item ? (
        <div>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <button onClick={() => handleAddItem(item)}>Add to Cart</button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductDetails;
