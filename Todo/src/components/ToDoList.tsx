import ToDo from "./ToDo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TypeToDo } from "../types/type";

function ToDoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div>
      {todos &&
        todos.map((item: TypeToDo) => <ToDo key={item.id} todoprop={item} />)}
    </div>
  );
}

export default ToDoList;
