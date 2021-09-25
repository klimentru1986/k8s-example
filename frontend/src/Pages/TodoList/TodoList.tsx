import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useTodoApi } from "../../Shared/Api/todo-api.hook";
import { TodoModel } from "../../Shared/Models/TodoModel";

import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import { green } from "@material-ui/core/colors";
import { AddTodo } from "./components/AddTodo";

export const TodoList: FC = () => {
  const [dense] = useState(false);
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const { getList, addTodo } = useTodoApi();

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

  const onAddTodo = useCallback(
    async (val) => {
      const todo = await addTodo(val);
      if (todo) {
        setTodos((prev) => [todo, ...prev]);
      }
    },
    [addTodo, setTodos]
  );

  useEffect(() => {
    initializeTodos();
  }, [initializeTodos]);

  return (
    <div className="TodoList">
      <h1 className="title">Tasks</h1>
      <AddTodo addTodo={onAddTodo} />
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
