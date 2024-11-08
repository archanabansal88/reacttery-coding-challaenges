/*
You need to create a custom hook called useLocalStorage(key, initialValue) that can be used to store and retrieve data from local storage. 
You should use the key prop as the key for the data in local storage and initialValue as the initial value.

The hook should return an object with two properties:

the current value of the data, which should be initialized to the value stored in local storage (if it exists), or the initialValue argument (if it doesn't)
a function that can be used to update the value of the data in local storage
Every time the value of the data is updated, the hook should update the corresponding value in local storage.
*/

import useLocalStorageI from "../../hooks/useLocalStorageI";

const LocalStorageI = () => {
  const { value, setValue } = useLocalStorageI("inputValue", "");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default LocalStorageI;
