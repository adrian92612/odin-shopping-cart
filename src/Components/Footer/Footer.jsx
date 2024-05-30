import styles from "./Footer.module.css";

export default function Footer() {
  const goBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <button onClick={goBackToTop}>Go back to Top</button>
    </footer>
  );
}
