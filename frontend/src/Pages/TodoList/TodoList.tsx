import { List } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useTodoApi } from "../../Shared/Api/todoApi.hook";
import { TodoModel } from "../../Shared/Models/TodoModel";

import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";

export const TodoList: FC = () => {
  const [dense] = useState(false);
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const { getList, addTodo, deleteTodo } = useTodoApi();

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

  const onDeleteTodo = useCallback(
    async (id) => {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    },
    [deleteTodo, setTodos]
  );

  useEffect(() => {
    initializeTodos();
  }, [initializeTodos]);

  return (
    <div className="TodoList">
      <h1 className="title">Tasks</h1>
      <AddTodo addTodo={onAddTodo} />
      <List className="list" dense={dense}>
        {todos.map((t, i) => (
          <TodoItem key={i} todo={t} onDelete={onDeleteTodo} />
        ))}
      </List>
    </div>
  );
};
