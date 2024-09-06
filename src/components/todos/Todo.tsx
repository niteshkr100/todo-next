import { todoProps } from "@/types";

import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      style={todoStyle}
      className="w-[700px] mx-auto flex items-center bg-slate-900 py-4 px-10 rounded-2xl text-white"
    >
      
      <span className=" font-bold uppercase grow">{todo.title}</span>
      <div  className="flex items-center justify-between">
      <div className="flex items-center ">
        <EditTodo todo={todo} />
      </div>

      <div className="flex items-center ">
        <DeleteTodo todo={todo} />
      </div>
      <ChangeTodo todo={todo} />
    </div>
    </div>
  );
};

export default Todo;
