import "./Root.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useCallback, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Root = () => {
  const [cartItems, setCartItems] = useState([]);

  const memoizedSetCartItems = useCallback((newItems) => {
    setCartItems(newItems);
  }, []);

  console.log("root re-rendered");
  return (
    <div className="root">
      <Header cartItems={cartItems} setCartItems={memoizedSetCartItems} />
      <Main setCartItems={memoizedSetCartItems} />
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
