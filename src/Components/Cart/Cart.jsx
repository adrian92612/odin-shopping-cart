/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartIcon, MinusIcon, PlusIcon } from "../SVG/Icons.jsx";
import { toast } from "react-toastify";
import { ACTIONS } from "../Root/Root.jsx";
import styles from "./Cart.module.css";

const Cart = ({ state, dispatch }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!visibility);
  const totalItems = state.reduce((total, item) => total + item.count, 0);

  const getTotalCheckoutPrice = () => {
    return state
      .filter((item) => item.forCheckout === true)
      .reduce((total, item) => total + item.count * item.price, 0)
      .toFixed(2);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (parseFloat(getTotalCheckoutPrice()) > 0) {
      dispatch({ type: ACTIONS.HANDLE_CHECKOUT });
      toast.success("Thank you purchasing!");
    } else {
      toast.warn("No items selected for checkout");
    }
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
          {state.length ? (
            state.map((item) => (
              <li key={item.id} className={styles.cartItemContainer}>
                <input
                  type="checkbox"
                  checked={item.forCheckout || false}
                  onChange={() =>
                    dispatch({ type: ACTIONS.TOGGLE_CHECKOUT, payload: { id: item.id } })
                  }
                />
                <div className={styles.picPart}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.detailsPart}>
                  <h5>{item.title}</h5>
                  <p className={styles.itemCount}>
                    <button
                      className={styles.countBtn}
                      onClick={() =>
                        dispatch({
                          type: ACTIONS.ADJUST_ITEM_COUNT,
                          payload: { id: item.id, n: -1 },
                        })
                      }
                    >
                      <MinusIcon />
                    </button>{" "}
                    {item.count}{" "}
                    <button
                      className={styles.countBtn}
                      onClick={() =>
                        dispatch({
                          type: ACTIONS.ADJUST_ITEM_COUNT,
                          payload: { id: item.id, n: 1 },
                        })
                      }
                    >
                      <PlusIcon />
                    </button>
                  </p>
                  <p>
                    USD <strong>{item.price.toFixed(2)}</strong>
                  </p>
                  <button
                    className={styles.removeBtn}
                    onClick={() => {
                      toast.success(`${item.title} has been removed from your cart!`);
                      dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id: item.id } });
                    }}
                  >
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
            <label htmlFor="cod"> Cash on delivery</label>
          </div>
          <div>
            <input type="radio" name="mop" id="cc" />
            <label htmlFor="cc"> Credit Card</label>
          </div>
          <div>
            <input type="radio" name="mop" id="ewallet" />
            <label htmlFor="ewallet"> E-Wallet</label>
          </div>
          <h3>Total Checkout Price</h3>
          <p>USD {state.length ? getTotalCheckoutPrice() : "USD 0.00"}</p>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
