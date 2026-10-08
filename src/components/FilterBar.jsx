import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setCategoryFilter,
  setStatusFilter,
  setDifficultyFilter,
} from "../features/tracker/trackerSlice";

const FilterBar = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.tracker.filters);

  return (
    <div className="grid gap-3 rounded-xl bg-white p-4 shadow-sm sm:gap-4 md:grid-cols-4">
      <input
        type="text"
        placeholder="Search questions..."
        value={filters.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:border-black"
      />

      <select
        value={filters.category}
        onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
        className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
      >
        <option value="all">All Categories</option>
        <option value="DSA">DSA</option>
        <option value="Git">Git</option>
        <option value="Technical">Technical</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
        className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
      >
        <option value="all">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={filters.difficulty}
        onChange={(e) => dispatch(setDifficultyFilter(e.target.value))}
        className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
      >
        <option value="all">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};

export default FilterBar;
