/* eslint-disable react/prop-types */
import "./Cart.css";

export default function Cart({ items, handleCount }) {
  return (
    <div className="cart-modal">
      <h1>Cart</h1>
      <ul>
        {items ? (
          items.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <div>
                <button onClick={() => handleCount(item.id, -1)}>-</button>{" "}
                <span>{item.count}</span>
                <button onClick={() => handleCount(item.id, 1)}>+</button>
              </div>
            </li>
          ))
        ) : (
          <p>No items yet</p>
        )}
      </ul>
      <button>checkout</button>
    </div>
  );
}
