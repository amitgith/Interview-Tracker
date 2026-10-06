import { createSlice } from "@reduxjs/toolkit";

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    interviews: [
      {
        id: 1,
        company: "Google",
        role: "Frontend Developer",
        status: "Applied",
      },
      {
        id: 2,
        company: "Microsoft",
        role: "React Developer",
        status: "Interview",
      },
    ],
    filters: {
      status: "all",
      search: "",
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
    setStatusFilter: (state, action) => {
      state.filters.status = action.payload;
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },
  },
});
export const {
  addInterview,
  deleteInterview,
  updateInterview,
  setStatusFilter,
  setSearch,
} = trackerSlice.actions;

export default trackerSlice.reducer;
