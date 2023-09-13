import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setSearchQuery } from "../../store/Slices/weatherSlice";
import { useDebouncedCallback } from "use-debounce";
import styles from "./style.module.css";

const Search = () => {
  const { searchQuery } = useSelector((state: RootState) => state.weather);
  const [state, setState] = useState(searchQuery);
  const dispatch = useDispatch<AppDispatch>();

  const debouncedOnChange = useDebouncedCallback((value: string) => {
    dispatch(setSearchQuery(value));
  }, 500);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={"Enter city..."}
      value={state}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
        debouncedOnChange(e.target.value);
      }}
    />
  );
};

export default Search;
