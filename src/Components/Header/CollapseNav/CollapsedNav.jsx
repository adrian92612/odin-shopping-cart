import { useState } from "react";
import { MenuIcon } from "../../SVG/Icons";
import styles from "./CollapsedNav.module.css";
import MenuModal from "./MenuModal";

const CollapsedNav = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <nav>
      <button className={styles.menuBtn} onClick={handleShow}>
        <MenuIcon />
        {show && <MenuModal />}
      </button>
    </nav>
  );
};

export default CollapsedNav;
