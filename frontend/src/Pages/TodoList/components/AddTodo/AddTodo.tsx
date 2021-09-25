import { TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { IconButton } from "@mui/material";
import { FC, useState } from "react";
import { AddTodoProps } from "./AddTodoProps";

export const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {
  const [val, setVal] = useState("");

  return (
    <div className="AddTodo">
      <TextField
        label="add todo"
        variant="outlined"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <IconButton
        color="primary"
        aria-label="add todo"
        component="span"
        onClick={async () => {
          await addTodo(val);
          setVal("");
        }}
      >
        <SaveIcon />
      </IconButton>
    </div>
  );
};
