import styles from "./style.module.css";
import Search from "../Search/Search";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <img className={styles.icon} src="logo.svg" alt="Logo" />
            <span className={styles.text}>Weater App</span>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};
export default Header;
