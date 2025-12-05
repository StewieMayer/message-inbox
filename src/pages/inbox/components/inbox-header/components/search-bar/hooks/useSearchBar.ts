import { addThreads } from "@app/features/inboxSlice";
import { useAppDispatch } from "@app/hooks";
import { useLazyGetThreadsQuery } from "@app/query/threadApi";
import { useState, useEffect } from "react";
import { useDebounce } from "@hooks/useDebounce";

const SEARCH_DELAY = 300;

export const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const [getThreads] = useLazyGetThreadsQuery();

  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearchValue = useDebounce(searchValue, SEARCH_DELAY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    getThreads({ search: debouncedSearchValue })
      .unwrap()
      .then((threads) => {
        dispatch(addThreads(threads));
      });
  }, [debouncedSearchValue, dispatch, getThreads]);

  return { handleChange, searchValue };
};
