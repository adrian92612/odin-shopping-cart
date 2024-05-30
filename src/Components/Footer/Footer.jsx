import styles from "./Footer.module.css";
import { toast } from "react-toastify";
import googlePlayBadge from "../../assets/googleplaybadge.png";
import appStoreBadge from "../../assets/appstorebadge.png";

export default function Footer() {
  const onSubscription = (e) => {
    e.preventDefault();
    toast.success(`Thank you for subscribing!`);
  };

  const goBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <button onClick={goBackToTop}>Go back to Top</button>
      <div>
        <h3>Subscribe and get the latest offers and discounts!</h3>
        <form onSubmit={onSubscription}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div>
        <h3>Get the App</h3>
        <a href="#">
          <img className={styles.badges} src={googlePlayBadge} alt="Google Play Badge" />
        </a>
        <a href="#">
          <img className={styles.badges} src={appStoreBadge} alt="App Store Badge" />
        </a>
      </div>
    </footer>
  );
}
