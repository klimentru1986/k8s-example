import { useCallback } from "react";
import useFetch from "use-http";
import { TodoModel } from "../Models/TodoModel";

export const useTodoApi = () => {
  const { get, post, response, loading, error } =
    useFetch<TodoModel>("/api/todos");

  const getList = useCallback(async (): Promise<TodoModel[] | undefined> => {
    const todos = await get("/");
    if (response.ok) {
      return todos;
    }
  }, [get, response]);

  return {
    getList,
  };
};
