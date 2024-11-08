import { useState } from "react";

const useLocalStorageI = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState(storedValue ? storedValue : initialValue);

  const updateValue = (val) => {
    localStorage.setItem(key, val);
    setValue(val);
  };
  return { value, setValue: updateValue };
};

export default useLocalStorageI;
