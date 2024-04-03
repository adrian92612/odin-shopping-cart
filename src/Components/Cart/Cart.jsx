/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Cart.module.css";
import CartIcon from "../SVG/CartIcon";

const Cart = ({ cartItems }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!visibility);

  return (
    <>
      <div
        className={`${styles.blurOverlay} ${visibility && styles.show}`}
        onClick={toggleVisibility}
      ></div>
      <button onClick={toggleVisibility}>
        <CartIcon />
      </button>
      <div className={`${styles.cartContainer} ${visibility && styles.show}`}>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
