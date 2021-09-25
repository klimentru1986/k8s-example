import { TodoModel } from "../../../Shared/Models/TodoModel";
import { green } from "@material-ui/core/colors";

export const getIconStyles = (t: TodoModel) =>
  t.completed ? { color: green[500] } : {};
