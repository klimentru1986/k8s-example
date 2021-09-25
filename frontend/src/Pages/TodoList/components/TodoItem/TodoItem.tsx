import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { FC } from "react";
import { TodoItemProps } from "./TodoItemProps";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import { getIconStyles } from "../../utils/getIconStyles";

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <ListItem>
      <ListItemText primary={todo.title} />
      <ListItemIcon>
        <DoneOutlineTwoToneIcon style={getIconStyles(todo)} />
      </ListItemIcon>
    </ListItem>
  );
};
