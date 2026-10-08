import { useDispatch, useSelector } from "react-redux";
import { setMachineCodingStatus } from "../features/tracker/trackerSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const interviews = useSelector((state) => state.tracker.interviews);
  const machineCodingStatus = useSelector(
    (state) => state.tracker.machineCoding.status,
  );

  const totalQuestions = interviews.length;

  const completedDSA = interviews.filter(
    (item) => item.category === "DSA" && item.status === "Completed",
  ).length;

  const completedInterviewQuestions = interviews.filter(
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
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Questions</p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {totalQuestions}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed DSA</p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {completedDSA}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed Interview Questions</p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {completedInterviewQuestions}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Machine Coding</p>

          <select
            value={machineCodingStatus}
            onChange={(e) => dispatch(setMachineCodingStatus(e.target.value))}
            className="mt-2 w-full rounded-lg border px-3 py-2 text-sm outline-none"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white p-5 shadow-sm sm:mt-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Overall Progress</p>

            <p className="mt-1 text-sm text-gray-500">Completed questions</p>
          </div>

          <span className="text-lg font-bold">{progress}%</span>
        </div>

        <div
          className="h-3 overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="h-full rounded-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
