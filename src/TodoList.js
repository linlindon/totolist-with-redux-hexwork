import AddInput from "./components/AddInput";
import List from "./components/List";

function TodoList() {
  return (
    <div className="conatiner todoListPage vhContainer">
      <div className="todoList_Content">
        <AddInput />
        <List />
      </div>
    </div>
  );
}

export default TodoList;
