import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { ACTIONS } from "../../Components/Root/Root";
import Loading from "../../Components/Loading/Loading";
import styles from "./ProductDetails.module.css";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, dispatch } = useOutletContext();
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
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.details}>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>
              Rating:{item.rating.rate}⭐ ({item.rating.count})
            </p>
            <button
              onClick={() => {
                toast.success(`${item.title} has been added to your cart!`);
                dispatch({ type: ACTIONS.ADD_ITEM, payload: { product: item } });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductDetails;
