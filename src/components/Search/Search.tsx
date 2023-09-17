import styles from "./style.module.css";
import { useSearch } from "../../hooks/useSearch";

const Search = () => {
  const { onChange, queryState } = useSearch();

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={"Enter city..."}
      value={queryState}
      onChange={onChange}
    />
  );
};

export default Search;
