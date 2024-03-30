/* eslint-disable react/prop-types */
import "./Cart.css";

export default function Cart({ items, handleCount, handleRemove }) {
  const handleTotalPrice = (items) => {
    let totalPrice = 0;
    items.map((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-modal">
      <h1>Cart</h1>
      <ul>
        {items ? (
          items.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>${item.price * item.count}</p>
              <div>
                <button onClick={() => handleCount(item.id, -1)}>-</button>{" "}
                <span>{item.count}</span>
                <button onClick={() => handleCount(item.id, 1)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No items yet</p>
        )}
      </ul>
      <p>Total Price: ${handleTotalPrice(items)}</p>
      <button>checkout</button>
    </div>
  );
}
