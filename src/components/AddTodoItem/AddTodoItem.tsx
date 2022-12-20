import React from "react";
import { useInput } from "../hooks/useInput.hook";

type Props = {
  addNewItemList: (label: string) => void | boolean;
};

const AddTodoItem = ({ addNewItemList }: Props) => {
  const { value, onChange, clearValue } = useInput("");

  return (
    <div className="d-flex align-items-center">
      <input
        value={value}
        onChange={(event) => onChange(event)}
        className="form-control"
        type="text"
        placeholder="Add"
      />
      <input
        onClick={() => value && addNewItemList(value) && clearValue()}
        className="btn btn-primary"
        type="button"
        value="Add"
      />
    </div>
  );
};
export default AddTodoItem;
