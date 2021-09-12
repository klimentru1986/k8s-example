import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useTodoApi } from "../../Shared/Api/todo-api.hook";
import { TodoModel } from "../../Shared/Models/TodoModel";

import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import { green } from "@material-ui/core/colors";

export const TodoList = () => {
  const [dense, setDense] = useState(false);
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const { getList } = useTodoApi();

  const initializeTodos = useCallback(async () => {
    const todos = await getList();
    if (todos) {
      setTodos(todos);
    }
  }, [getList]);

  const getIconStyles = useCallback(
    (t: TodoModel) => (t.completed ? { color: green[500] } : {}),
    []
  );

  useEffect(() => {
    initializeTodos();
  }, [initializeTodos]);

  return (
    <div className="TodoList">
      <h1 className="title">Tasks</h1>
      <List dense={dense}>
        {todos.map((t, i) => (
          <ListItem>
            <ListItemText primary={t.title} />
            <ListItemIcon>
              <DoneOutlineTwoToneIcon style={getIconStyles(t)} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
