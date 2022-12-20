import React from "react";
import cn from "classnames";

import styles from "./TodoItem.module.scss";

type Props = {
  deleteCurrentListItem: (id: string) => void;
  changeCompleted: (id: string) => void;
  changeImportant: (id: string) => void;
  label: string;
  id: string;
  important: boolean;
  completed: boolean;
};

const TodoItem = ({
  deleteCurrentListItem,
  changeCompleted,
  changeImportant,
  label,
  id,
  important,
  completed,
}: Props) => (
  <>
    <li className="list-group-item d-flex justify-content-between align-items-center ">
      <span
        tabIndex={0}
        role={"button"}
        onClick={() => changeCompleted(id)}
        onKeyUp={(event) => {
          if (event.code === "Enter") changeCompleted(id);
        }}
        className={cn(styles.todoItem, {
          "fw-bold fst-italic text-primary": important,
          "text-decoration-line-through": completed,
        })}
      >
        {label}
      </span>
      <div>
        <button
          onClick={() => changeImportant(id)}
          type="button"
          className="btn btn-outline-success me-2"
        >
          Important
        </button>
        <button
          onClick={() => deleteCurrentListItem(id)}
          type="button"
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </li>
  </>
);

export default TodoItem;
