import { createSlice } from "@reduxjs/toolkit";

const loadInterviews = () => {
  try {
    const stored = localStorage.getItem("interviews");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const loadMachineCoding = () => {
  try {
    const stored = localStorage.getItem("machineCoding");
    return stored ? JSON.parse(stored) : { status: "Pending" };
  } catch {
    return { status: "Pending" };
  }
};

const initialState = {
  interviews: loadInterviews(),
  machineCoding: loadMachineCoding(),
  filters: {
    search: "",
    category: "all",
    status: "all",
    difficulty: "all",
  },
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
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

    setMachineCodingStatus: (state, action) => {
      state.machineCoding.status = action.payload;
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
  setMachineCodingStatus,
} = trackerSlice.actions;

export default trackerSlice.reducer;
