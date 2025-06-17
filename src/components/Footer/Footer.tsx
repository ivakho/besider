import styles from "./Footer.module.css";
import logoImg from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <a className={styles.link} href="#">
            Log In
          </a>
          <a className={styles.link} href="#">
            About Us
          </a>
          <a className={styles.link} href="#">
            Publishers
          </a>
          <a className={styles.link} href="#">
            Sitemap
          </a>
        </div>
        <div className={styles.logo}>
          <div className={styles.logo__text}>
            Powered by
          </div>
          <img className={styles.logo__img} src={logoImg} alt="logo" />
        </div>
        <div className={styles.copyright}>
          © 2023 Besider. Inspired by Insider
        </div>
      </div>
    </div>
  );
};
