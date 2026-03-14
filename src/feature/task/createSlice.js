import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: []
};

const taskSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {

    addTask: (state, action) => {
      state.task.push(action.payload);
    },

    removeTask: (state, action) => {
      state.task = state.task.filter(task => task.id !== action.payload);
    },

    toggleTask: (state, action) => {
      const task = state.task.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.task.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
    }

  }
});

export const { addTask, removeTask, toggleTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;