import { useEffect } from "react";
import { useState } from "react";

function useLocalStorageState(key, initialState) {
  const [data, setData] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}

export default useLocalStorageState;
