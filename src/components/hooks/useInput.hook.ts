import React, { useState } from "react";

interface IUseInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearValue: () => void;
}

export const useInput = (initialValue: string): IUseInput => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const clearValue = () => setValue("");

  return {
    value,
    onChange: handleChange,
    clearValue,
  };
};
