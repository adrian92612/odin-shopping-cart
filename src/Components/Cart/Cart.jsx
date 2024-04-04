/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartIcon, MinusIcon, PlusIcon } from "../SVG/Icons";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, toggleItemForCheckout, adjustItemCount }) => {
  const [visibility, setVisibility] = useState(false);
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

        <ul className={styles.listContainer}>
          {cartItems.length ? (
            cartItems.map((item) => (
              <li key={item.id} className={styles.cartItemContainer}>
                <input
                  type="checkbox"
                  checked={item.forCheckout || false}
                  onChange={() => toggleItemForCheckout(item.id)}
                />
                <img src={item.image} alt="" />
                <div>
                  <h5>{item.title}</h5>
                  <Link to={`/products/item/${item.id}`} onClick={toggleVisibility}>
                    <p>see more...</p>
                  </Link>
                  <p>
                    <button onClick={(e) => adjustItemCount(item.id, -1, e)}>
                      <MinusIcon />
                    </button>{" "}
                    {item.count}{" "}
                    <button onClick={() => adjustItemCount(item.id, 1)}>
                      <PlusIcon />
                    </button>
                  </p>
                  <p>${(item.price * item.count).toFixed(2)}</p>
                </div>
              </li>
            ))
          ) : (
            <p>Nothing to see here...</p>
          )}
        </ul>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
