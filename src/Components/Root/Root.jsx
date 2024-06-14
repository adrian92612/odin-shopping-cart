/* eslint-disable react-refresh/only-export-components */
import "./Root.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useReducer } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export const ACTIONS = {
  ADD_ITEM: "add item",
  REMOVE_ITEM: "remove item",
  ADJUST_ITEM_COUNT: "adjust item count",
  TOGGLE_CHECKOUT: "toggle checkout",
  HANDLE_CHECKOUT: "handle checkout",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return state.some((item) => item.id === action.payload.product.id)
        ? state.map((item) =>
            item.id === action.payload.product.id ? { ...item, count: item.count + 1 } : item
          )
        : [...state, { ...action.payload.product, count: 1, forCheckout: false }];
    case ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case ACTIONS.ADJUST_ITEM_COUNT:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: Math.max(item.count + action.payload.n, 1) }
          : item
      );
    case ACTIONS.TOGGLE_CHECKOUT:
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, forCheckout: !item.forCheckout } : item
      );
    case ACTIONS.HANDLE_CHECKOUT:
      return state.filter((item) => !item.forCheckout);
    default:
      return state;
  }
};

const Root = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="root">
      <Header state={state} dispatch={dispatch} />
      <Main dispatch={dispatch} />
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
