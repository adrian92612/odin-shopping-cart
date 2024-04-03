import { Link, NavLink } from "react-router-dom";
import "./Root.css";
import Main from "../Main/Main";
import NotificationModal from "../Notification/NotificationModal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="root">
      <NotificationModal />
      <header>
        <Link to={"/"}>
          <h1>Amber</h1>
        </Link>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </header>
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
