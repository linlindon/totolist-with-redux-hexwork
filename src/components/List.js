import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { deleteCompletedTodos, selectTodoListType } from "../store/todoSlice";

function List() {
  const dispatch = useDispatch();
  const [listType, setListType] = useState(0);
  const todosList = useSelector((state) => state.todos);

  // const selectedList = useSelector((state) => state.todos.todos);
  let completedItems = useSelector((state) => {
    return state.todos.todos.filter((todo) => todo.completed === true);
  });

  const deleteCompletedHandler = () => {
    dispatch(deleteCompletedTodos());
  };

  function changeListTypeHandler(e) {
    if (!e) return dispatch(selectTodoListType(0));
    switch (e.target.innerHTML) {
      case "全部":
        dispatch(selectTodoListType(0));
        setListType(0);
        break;
      case "待完成":
        dispatch(selectTodoListType(1));
        setListType(1);
        break;
      default:
        dispatch(selectTodoListType(2));
        setListType(2);
        break;
    }
  }

  useEffect(() => {
    changeListTypeHandler();
  }, [todosList.todos]);

  return (
    <div className="todoList_list">
      <ul className="todoList_tab">
        <li>
          <a
            onClick={changeListTypeHandler}
            href="#"
            className={listType === 0 ? "active" : ""}
          >
            全部
          </a>
        </li>
        <li>
          <a
            onClick={changeListTypeHandler}
            href="#"
            className={listType === 1 ? "active" : ""}
          >
            待完成
          </a>
        </li>
        <li>
          <a
            onClick={changeListTypeHandler}
            href="#"
            className={listType === 2 ? "active" : ""}
          >
            已完成
          </a>
        </li>
      </ul>
      <div className="todoList_items">
        <ul className="todoList_item">
          {todosList.tempTodos.length === 0
            ? "目前沒有事項"
            : todosList.tempTodos.map((todo) => (
                <ListItem
                  title={todo.title}
                  completed={todo.completed}
                  id={todo.id}
                />
              ))}
        </ul>
        <div className="todoList_statistics">
          <p>{completedItems.length} 個已完成項目</p>
          <a onClick={deleteCompletedHandler} href="#">
            清除已完成項目
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
