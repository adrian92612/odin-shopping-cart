import "./Root.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Root = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="root">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Main setCartItems={setCartItems} />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
