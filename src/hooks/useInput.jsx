import { useState } from "react";

export const useInput = (defaultValue = "") => {
  const [state, setState] = useState(defaultValue);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return [state, handleChange];
};
