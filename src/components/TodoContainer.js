import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";
import Input from "./Input";
import TodoItem from "./TodoItem";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-todo-container">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
