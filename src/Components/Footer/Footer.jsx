/* eslint-disable react/display-name */
import styles from "./Footer.module.css";
import { toast } from "react-toastify";
import googlePlayBadge from "../../assets/googleplaybadge.png";
import appStoreBadge from "../../assets/appstorebadge.png";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "../SVG/Icons";
import { memo } from "react";
const Footer = memo(() => {
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
      <button onClick={goBackToTop} className={styles.goTopBtn}>
        Go back to Top
      </button>
      <div className={styles.container}>
        <div className={styles.subscription}>
          <h3>Subscribe and get the latest offers and discounts!</h3>
          <form onSubmit={onSubscription}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles.getApp}>
          <h3>Get the App</h3>
          <a href="#">
            <img className={styles.badges} src={googlePlayBadge} alt="Google Play Badge" />
          </a>
          <a href="#">
            <img className={styles.badges} src={appStoreBadge} alt="App Store Badge" />
          </a>
        </div>
        <div className={styles.followUs}>
          <h3>Follow us!</h3>
          <div>
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
        </div>
        <div className={styles.contactUs}>
          <h3>Contact Us</h3>
          <h4>Customer Support</h4>
          <p>999-999-999</p>
          <p>CustomerSupport@amber.com</p>
        </div>
        <div className={styles.branches}>
          <h3>Branches</h3>
          <div className={styles.branchesCity}>
            <div>
              <p>Manila - Main</p>
              <p>Bangkok</p>
              <p>Hanoi</p>
              <p>Milan</p>
            </div>
            <div>
              <p>New York</p>
              <p>Paris</p>
              <p>Tokyo</p>
              <p>Sydney</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2024 Amber&#39;s Shop®. All Rights Reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
