import { useDispatch } from "react-redux";
import { deleteInterview } from "../features/tracker/trackerSlice";

const InterviewCard = ({ interview, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteInterview(interview.id));
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="wrap-break-word text-base font-semibold sm:text-lg">
            {interview.question}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium sm:text-sm">
              {interview.category}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium sm:text-sm">
              {interview.difficulty}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium sm:text-sm">
              {interview.status}
            </span>
          </div>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          <button
            onClick={onEdit}
            className="flex-1 cursor-pointer rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-100 sm:flex-none"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 cursor-pointer rounded-lg bg-red-500 px-3 py-2 text-sm text-white transition hover:bg-red-600 sm:flex-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
