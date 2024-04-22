// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todos;
