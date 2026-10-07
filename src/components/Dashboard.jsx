import { useSelector } from "react-redux";

const Dashboard = () => {
  const interviews = useSelector((state) => state.tracker.interviews);

  const totalQuestions = interviews.length;

  const completedDSA = interviews.filter(
    (item) => item.category === "DSA" && item.status === "Completed",
  ).length;

  const completedTechnical = interviews.filter(
    (item) => item.category === "Technical" && item.status === "Completed",
  ).length;

  const completedQuestions = interviews.filter(
    (item) => item.status === "Completed",
  ).length;

  const progress =
    totalQuestions === 0
      ? 0
      : Math.round((completedQuestions / totalQuestions) * 100);

  return (
    <div>
      {/* Dashboard Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Total Questions */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Questions</p>

          <h2 className="mt-2 text-3xl font-bold">{totalQuestions}</h2>
        </div>

        {/* Completed DSA */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed DSA</p>

          <h2 className="mt-2 text-3xl font-bold">{completedDSA}</h2>
        </div>

        {/* Completed Technical */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed Technical</p>

          <h2 className="mt-2 text-3xl font-bold">{completedTechnical}</h2>
        </div>

        {/* Machine Coding */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Machine Coding</p>

          <h2 className="mt-2 text-lg font-bold">
            {progress >= 70 ? "Good Progress" : "In Progress"}
          </h2>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
        <div className="mb-2 flex justify-between">
          <p className="font-medium">Overall Progress</p>

          <span className="font-semibold">{progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
