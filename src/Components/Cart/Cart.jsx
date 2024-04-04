/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartIcon } from "../SVG/Icons";
import { useNavigateToProduct } from "../../Helpers/helpers";
import styles from "./Cart.module.css";

const Cart = ({ cartItems }) => {
  const [visibility, setVisibility] = useState(false);
  const navigateToProduct = useNavigateToProduct();
  const toggleVisibility = () => setVisibility(!visibility);

  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <>
      <div
        className={`${styles.blurOverlay} ${visibility && styles.show}`}
        onClick={toggleVisibility}
      ></div>
      <button className={styles.cartBtn} onClick={toggleVisibility}>
        <CartIcon />
        <span className={styles.itemCountBadge}>{totalItems}</span>
      </button>
      <div className={`${styles.cartContainer} ${visibility && styles.show}`}>
        <h1>Cart Items</h1>
        <ul>
          {cartItems.length ? (
            cartItems.map((item) => (
              <li
                key={item.id}
                className={styles.cartItemContainer}
                onClick={() => {
                  navigateToProduct(item.id);
                  toggleVisibility();
                }}
              >
                <img src={item.image} alt="" />
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.count}</p>
                  <p>${item.price * item.count.toFixed(2)}</p>
                </div>
              </li>
            ))
          ) : (
            <p>Nothing to see here...</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Cart;
