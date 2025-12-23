import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";

import { theme } from "../../../assets";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        <h1>React shop</h1>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.link
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.link
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <button>
        <img src={theme.dark} alt="theme" className={styles.theme} />
      </button>
    </header>
  );
};
