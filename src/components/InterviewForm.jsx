import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addInterview } from "../features/tracker/trackerSlice";

const InterviewForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      question: "",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending",
    },
  });

  const onSubmit = (data) => {
    dispatch(
      addInterview({
        id: Date.now(),
        ...data,
      }),
    );

    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 rounded-xl bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Add New Question</h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a question to your interview preparation tracker.
        </p>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Question</label>

          <input
            {...register("question", {
              required: "Question is required",
              minLength: {
                value: 3,
                message: "Question must be at least 3 characters",
              },
            })}
            placeholder="Enter interview question"
            className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:border-black"
          />

          {errors.question && (
            <p className="mt-1 text-sm text-red-500">
              {errors.question.message}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium">Category</label>

            <select
              {...register("category")}
              className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
            >
              <option value="DSA">DSA</option>
              <option value="Git">Git</option>
              <option value="Technical">Technical</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Difficulty</label>

            <select
              {...register("difficulty")}
              className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Status</label>

            <select
              {...register("status")}
              className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2.5 cursor-pointer text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Add Question
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-4 py-2.5 text-sm cursor-pointer font-medium transition hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default InterviewForm;
