const FilterBar = () => {
  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
      
      <input
        type="text"
        placeholder="Search interviews..."
        className="flex-1 rounded-lg border px-4 py-2 outline-none"
      />

      <select className="rounded-lg border px-4 py-2">
        <option value="all">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
      </select>

    </div>
  );
};

export default FilterBar;