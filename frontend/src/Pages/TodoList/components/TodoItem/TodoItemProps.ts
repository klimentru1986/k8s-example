import { TodoModel } from "../../../../Shared/Models/TodoModel";

export interface TodoItemProps {
  todo: TodoModel;
  onDelete: (id: number) => Promise<void>;
}
