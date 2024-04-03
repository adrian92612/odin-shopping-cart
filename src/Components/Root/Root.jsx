import "./Root.css";
import Main from "../Main/Main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="root">
      <Header />
      <Main />
      <footer>
        <p>Some Footer</p>
      </footer>
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
