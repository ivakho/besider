import styles from "./Header.module.css";
import burgerIcon from "../../assets/burger.svg";
import { changeBurgerState } from "../../redux/slices/burgerSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store/store";

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onOpenBurgerMenu = () => {
    dispatch(changeBurgerState(true));
  };

  return (
    <div className={styles.header}>
      <img
        className={styles.icon}
        src={burgerIcon}
        onClick={onOpenBurgerMenu}
      />
      <h1 className={styles.title}>Besider</h1>
    </div>
  );
};
