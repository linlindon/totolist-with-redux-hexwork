import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { deleteCompletedTodos } from "../store/todoSlice";

function List() {
  const dispatch = useDispatch();
  const [listType, setListType] = useState(0);
  let todos = useSelector((state) => state.todos);
  // if (listType === 0) todos = useSelector((state) => state.todos);

  let completedItem = useSelector((state) => {
    return state.todos.filter((i) => i.completed === true);
  });

  const deleteCompletedHandler = () => {
    dispatch(deleteCompletedTodos());
  };

  function changeListTypeHandler(e) {
    if (e.target.innerHTML === "全部") setListType(0);
    else if (e.target.innerHTML === "待完成") setListType(1);
    else setListType(2);
  }

  return (
    <div className="todoList_list">
      <ul className="todoList_tab">
        <li>
          <a onClick={changeListTypeHandler} href="#" className="active">
            全部
          </a>
        </li>
        <li>
          <a onClick={changeListTypeHandler} href="#">
            待完成
          </a>
        </li>
        <li>
          <a onClick={changeListTypeHandler} href="#">
            已完成
          </a>
        </li>
      </ul>
      <div className="todoList_items">
        <ul className="todoList_item">
          {todos.length === 0
            ? "目前沒有事項"
            : todos.map((todo) => (
                <ListItem
                  title={todo.title}
                  completed={todo.completed}
                  id={todo.id}
                />
              ))}
        </ul>
        <div className="todoList_statistics">
          <p>{completedItem.length} 個已完成項目</p>
          <a onClick={deleteCompletedHandler} href="#">
            清除已完成項目
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
