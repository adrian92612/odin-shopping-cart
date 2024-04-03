/* eslint-disable react/prop-types */
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
