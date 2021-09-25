import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { FC, useCallback } from "react";
import { TodoItemProps } from "./TodoItemProps";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { getIconStyles } from "../../utils/getIconStyles";

export const TodoItem: FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const onUpdateTodo = useCallback(() => {
    todo.completed = !todo.completed;
    onUpdate(todo);
  }, [todo, onUpdate]);

  return (
    <ListItem>
      <ListItemText primary={todo.title} />
      <ListItemIcon className="list-icon" onClick={onUpdateTodo}>
        <DoneOutlineTwoToneIcon style={getIconStyles(todo)} />
      </ListItemIcon>
      <ListItemIcon className="list-icon" onClick={() => onDelete(todo.id)}>
        <DeleteForever />
      </ListItemIcon>
    </ListItem>
  );
};
