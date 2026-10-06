const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Interview Tracker</h1>

        <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white cursor-pointer">
          + Add Interview
        </button>
      </div>
    </header>
  );
};

export default Header;
