import { useDispatch } from "react-redux";
import { deleteInterview } from "../features/tracker/trackerSlice";

const InterviewCard = ({ interview, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteInterview(interview.id));
  };

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{interview.question}</h2>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
              {interview.category}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
              {interview.difficulty}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
              {interview.status}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={onEdit} className="rounded-lg border px-3 py-1">
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-500 px-3 py-1 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
