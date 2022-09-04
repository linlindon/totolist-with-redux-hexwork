import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../store/todoSlice";

function ListItem({ title, completed, id }) {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const completedHandler = () => {
    dispatch(completeTodo({ id: id, completed: !completed }));
  };
  return (
    <li>
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          value="true"
          checked={completed}
          onChange={completedHandler}
        />
        <span>{title}</span>
      </label>
      <a href="#">
        <i onClick={deleteTodoHandler} className="fa fa-times">
          x
        </i>
      </a>
    </li>
  );
}

export default ListItem;
