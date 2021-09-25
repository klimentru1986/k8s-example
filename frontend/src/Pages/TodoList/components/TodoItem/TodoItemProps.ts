import { TodoModel } from "../../../../Shared/Models/TodoModel";

export interface TodoItemProps {
  todo: TodoModel;
  onUpdate: (todo: TodoModel) => Promise<TodoModel | undefined>;
  onDelete: (id: number) => Promise<void>;
}
