import { useState } from "react";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

function AddInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
    <div className="inputBox">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="請輸入待辦事項"
      />
      <a onClick={submitHandler} href="#">
        <i className="fa fa-plus">+</i>
      </a>
    </div>
  );
}

export default AddInput;
