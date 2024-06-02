import styles from "./Footer.module.css";
import { toast } from "react-toastify";
import googlePlayBadge from "../../assets/googleplaybadge.png";
import appStoreBadge from "../../assets/appstorebadge.png";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "../SVG/Icons";

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
      <div>
        <h3>Follow us!</h3>
        <i className={styles.socMedIcons}>
          <FacebookIcon />
        </i>
        <i className={styles.socMedIcons}>
          <InstagramIcon />
        </i>
        <i className={styles.socMedIcons}>
          <YoutubeIcon />
        </i>
        <i className={styles.socMedIcons}>
          <XIcon />
        </i>
      </div>
      <div>
        <h3>Contact Us</h3>
        <h4>Customer Support</h4>
        <p>999-999-999</p>
        <p>CustomerSupport@amber.com</p>
      </div>
      <div>
        <h3>Branches</h3>
        <p>Manila - Main</p>
        <p>Bangkok</p>
        <p>Hanoi</p>
        <p>Milan</p>
        <p>New York</p>
        <p>Paris</p>
        <p>Tokyo</p>
      </div>
      <div>
        <p>Copyright © 2024 Amber&#39;s Shop®. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
