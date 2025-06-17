import styles from "./BurgerMenu.module.css";
import cross from "../../assets/cross.svg";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store/store";
import { changeBurgerState } from "../../redux/slices/burgerSlice";

export const BurgerMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onCloseBurgerMenu = () => {
    dispatch(changeBurgerState(false));
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.cross}
        src={cross}
        alt="cross"
        onClick={onCloseBurgerMenu}
      />
      <div className={styles.links}>
        <a className={styles.link} href="#">
          Science
        </a>
        <a className={styles.link} href="#">
          General
        </a>
        <a className={styles.link} href="#">
          Entertaiment
        </a>
        <a className={styles.link} href="#">
          Technology
        </a>
        <a className={styles.link} href="#">
          Business
        </a>
        <a className={styles.link} href="#">
          Health
        </a>
        <a className={styles.link} href="#">
          Sports
        </a>
      </div>
    </div>
  );
};
