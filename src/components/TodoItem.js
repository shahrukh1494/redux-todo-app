import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleCheck(id));
  };

  return (
    <div className="todoitem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

      <p className={done ? "todoitem-done" : ""}>{name}</p>
    </div>
  );
};

export default TodoItem;
