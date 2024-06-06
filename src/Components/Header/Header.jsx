import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import CollapsedNav from "./CollapseNav/CollapsedNav";
// import Cart from "../Main/Cart/Cart";

const Header = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <header>
      {/* <Cart /> */}
      <Link to={"/"}>
        <h1>Amber</h1>
      </Link>
      {width < 768 ? (
        <CollapsedNav />
      ) : (
        <Link to={"/products"}>
          <h2>Products</h2>
        </Link>
      )}
    </header>
  );

  // return (
  //   <header>
  //     <div className="divider">
  //       <Link to={"/"}>
  //         <h1>Amber</h1>
  //       </Link>
  //     </div>
  //     {width < 768 ? (
  //       <CollapsedNav />
  //     ) : (
  //       <div className="divider">
  //         <Link to={"/products"}>
  //           <h2>Products</h2>
  //         </Link>
  //       </div>
  //     )}

  //     <div className="divider"></div>
  //   </header>
  // );
};

export default Header;
