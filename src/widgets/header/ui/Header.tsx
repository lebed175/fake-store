import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>React shop</h1>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={styles.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={styles.link}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.link}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className={styles.theme}>
        {/* <img src="/" alt="" /> */}
        <p>Смена темы</p>
      </button>
    </header>
  );
};
