import { useCallback } from "react";
import useFetch from "use-http";
import { TodoModel } from "../Models/TodoModel";

export const useTodoApi = () => {
  const { get, post, response } = useFetch<TodoModel>("/api/todos");

  const getList = useCallback(async (): Promise<TodoModel[] | undefined> => {
    const todos = await get("/");
    if (response.ok) {
      return todos;
    }
  }, [get, response]);

  const addTodo = useCallback(
    async (todoTitle): Promise<TodoModel | undefined> => {
      const todo = await post("/", {
        title: todoTitle,
        completed: false,
      });
      if (response.ok) {
        return todo;
      }
    },
    [post, response]
  );

  return {
    getList,
    addTodo,
  };
};
