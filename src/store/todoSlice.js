import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 1, title: "要睡覺", completed: false },
      { id: 2, title: "要吃飯", completed: false },
      { id: 3, title: "要洗衣服", completed: false },
    ],
    tempTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    completeTodo: (state, action) => {
      let index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },
    deleteCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => {
        return todo.completed !== true;
      });
    },
    selectTodoListType: (state, action) => {
      switch (action.payload) {
        case 0:
          state.tempTodos = state.todos;
          break;
        case 1:
          state.tempTodos = state.todos.filter((todo) => !todo.completed);
          break;
        default:
          state.tempTodos = state.todos.filter((todo) => todo.completed);
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  completeTodo,
  deleteCompletedTodos,
  selectTodoListType,
} = todoSlice.actions;
export default todoSlice.reducer;
