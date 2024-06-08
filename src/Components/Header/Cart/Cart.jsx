/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartIcon, MinusIcon, PlusIcon } from "../../SVG/Icons";
import { toast } from "react-toastify";
import styles from "./Cart.module.css";

const Cart = ({ cartItems, setCartItems }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!visibility);

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    toast.success(`An item was removed from your cart!`);
  };

  const adjustItemCount = (itemId, n) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: Math.max(item.count + n, 1) } : item
      )
    );
  };

  const toggleItemForCheckout = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, forCheckout: !item.forCheckout } : item
      )
    );
  };

  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);
  const getTotalCheckoutPrice = () => {
    return cartItems
      .filter((item) => item.forCheckout === true)
      .reduce((total, item) => total + item.count * item.price, 0)
      .toFixed(2);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setCartItems((prevItems) => prevItems.filter((item) => !item.forCheckout));
  };

  return (
    <div>
      <div
        className={`${styles.blurOverlay} ${visibility && styles.show}`}
        onClick={toggleVisibility}
      ></div>
      <button className={styles.cartBtn} onClick={toggleVisibility}>
        <CartIcon />
        <span className={styles.itemCountBadge}>{totalItems}</span>
      </button>
      <div className={`${styles.cartModal} ${visibility && styles.show}`}>
        <h3>Cart Items</h3>
        <ul className={styles.listContainer}>
          {cartItems.length ? (
            cartItems.map((item) => (
              <li key={item.id} className={styles.cartItemContainer}>
                <input
                  type="checkbox"
                  checked={item.forCheckout || false}
                  onChange={() => toggleItemForCheckout(item.id)}
                />
                <div className={styles.picPart}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.detailsPart}>
                  <h5>{item.title}</h5>
                  <p className={styles.itemCount}>
                    <button
                      className={styles.countBtn}
                      onClick={() => adjustItemCount(item.id, -1)}
                    >
                      <MinusIcon />
                    </button>{" "}
                    {item.count}{" "}
                    <button className={styles.countBtn} onClick={() => adjustItemCount(item.id, 1)}>
                      <PlusIcon />
                    </button>
                  </p>
                  <p>
                    USD <strong>{item.price.toFixed(2)}</strong>
                  </p>
                  <button className={styles.removeBtn} onClick={() => removeItemFromCart(item.id)}>
                    Remove Item
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>Nothing to see here...</p>
          )}
        </ul>
        <form className={styles.paymentForm} onSubmit={handleCheckout}>
          <h3>Mode of Payment</h3>
          <div>
            <input type="radio" name="mop" id="cod" required />
            <label htmlFor="cod">Cash on delivery</label>
          </div>
          <div>
            <input type="radio" name="mop" id="cc" />
            <label htmlFor="cc">Credit Card</label>
          </div>
          <div>
            <input type="radio" name="mop" id="ewallet" />
            <label htmlFor="ewallet">E-Wallet</label>
          </div>
          <h3>Total Checkout Price</h3>
          <p>USD {cartItems.length ? getTotalCheckoutPrice() : "USD 0.00"}</p>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
