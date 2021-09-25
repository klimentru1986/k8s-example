import { List } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useTodoApi } from "../../Shared/Api/todo-api.hook";
import { TodoModel } from "../../Shared/Models/TodoModel";

import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";

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
          <TodoItem key={i} todo={t} />
        ))}
      </List>
    </div>
  );
};
