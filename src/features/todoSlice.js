import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    toggleCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done = !item.done;
        }
        return { ...state };
      });
    },
  },
});

export const { saveTodo, toggleCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
