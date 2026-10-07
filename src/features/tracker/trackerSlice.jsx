import { createSlice } from "@reduxjs/toolkit";

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    interviews: [
      {
        id: 1,
        question: "Two Sum",
        category: "DSA",
        difficulty: "Easy",
        status: "Completed",
      },
      {
        id: 2,
        question: "Git Merge vs Rebase",
        category: "Git",
        difficulty: "Medium",
        status: "In Progress",
      },
      {
        id: 3,
        question: "What is React Virtual DOM?",
        category: "Technical",
        difficulty: "Easy",
        status: "Pending",
      },
    ],
    filters: {
      search: "",
      category: "all",
      status: "all",
      difficulty: "all",
    },
  },
  reducers: {
    addInterview: (state, action) => {
      state.interviews.push(action.payload);
    },
    deleteInterview: (state, action) => {
      state.interviews = state.interviews.filter(
        (item) => item.id !== action.payload,
      );
    },
    updateInterview: (state, action) => {
      const index = state.interviews.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.interviews[index] = action.payload;
      }
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },

    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },

    setStatusFilter: (state, action) => {
      state.filters.status = action.payload;
    },

    setDifficultyFilter: (state, action) => {
      state.filters.difficulty = action.payload;
    },
  },
});
export const {
  addInterview,
  deleteInterview,
  updateInterview,
  setSearch,
  setCategoryFilter,
  setStatusFilter,
  setDifficultyFilter,
} = trackerSlice.actions;

export default trackerSlice.reducer;
