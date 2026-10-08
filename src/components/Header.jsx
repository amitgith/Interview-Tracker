const Header = ({ onAdd }) => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">
            Interview Practice Tracker
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track your interview preparation
          </p>
        </div>

        <button
          onClick={onAdd}
          className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium cursor-pointer text-white transition hover:bg-gray-800 sm:w-auto"
        >
          + Add Question
        </button>
      </div>
    </header>
  );
};

export default Header;