import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: new Date().getTime(),
        title: "react를 배워봅시다.",
        isDone: true,
      },
      {
        id: new Date().getTime() + 1,
        title: "redux를 배워봅시다.",
        isDone: false,
      },
      {
        id: new Date().getTime() + 1,
        title: "redux를 배워봅시다.",
        isDone: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
