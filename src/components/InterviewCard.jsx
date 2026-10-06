import { useDispatch } from "react-redux";
import { deleteInterview } from "../features/tracker/trackerSlice";

const InterviewCard = ({ interview }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteInterview(interview.id));
  };
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">{interview.company}</h2>

          <p className="text-gray-600">{interview.role}</p>
        </div>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm">
          {interview.status}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">📅 {interview.date}</p>

        <div className="flex gap-2">
          <button className="rounded-lg border px-3 py-1 cursor-pointer">
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-500 px-3 py-1 text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
