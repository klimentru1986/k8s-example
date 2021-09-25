import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { FC } from "react";
import { TodoItemProps } from "./TodoItemProps";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { getIconStyles } from "../../utils/getIconStyles";

export const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={todo.title} />
      <ListItemIcon className="list-icon">
        <DoneOutlineTwoToneIcon style={getIconStyles(todo)} />
      </ListItemIcon>
      <ListItemIcon className="list-icon" onClick={() => onDelete(todo.id)}>
        <DeleteForever />
      </ListItemIcon>
    </ListItem>
  );
};
