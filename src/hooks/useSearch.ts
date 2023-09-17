import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useDebouncedCallback } from "use-debounce";
import { setSearchQuery } from "../store/Slices/weatherSlice";

export function useSearch() {
  const { searchQuery } = useSelector((state: RootState) => state.weather);
  const [queryState, setQueryState] = useState(searchQuery);
  const dispatch = useDispatch<AppDispatch>();

  const debouncedOnChange = useDebouncedCallback((value: string) => {
    dispatch(setSearchQuery(value));
  }, 500);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.target.value);
    debouncedOnChange(e.target.value);
  };

  return {
    queryState,
    onChange,
  };
}
