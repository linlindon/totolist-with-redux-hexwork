import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "要睡覺", completed: false },
    { id: 2, title: "要吃飯", completed: false },
    { id: 3, title: "要洗衣服", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    completeTodo: (state, action) => {
      let index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteCompletedTodos: (state) => {
      return state.filter((todo) => {
        return todo.completed !== true;
      });
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, deleteCompletedTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
