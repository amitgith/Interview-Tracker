import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addInterview } from "../features/tracker/trackerSlice";

const InterviewForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
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
        id: crypto.randomUUID(),
        question: data.question.trim(),
        category: data.category,
        difficulty: data.difficulty,
        status: data.status,
      }),
    );

    reset();
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl bg-white p-5 shadow-sm"
    >
      <h2 className="mb-4 text-lg font-semibold">Add Question</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium">Question</label>

          <input
            {...register("question", {
              required: "Question is required",
              minLength: {
                value: 3,
                message: "Question must contain at least 3 characters",
              },
            })}
            placeholder="Enter your question"
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
          />

          {errors.question && (
            <p className="mt-1 text-sm text-red-500">
              {errors.question.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Category</label>

          <select
            {...register("category", { required: true })}
            className="w-full rounded-lg border px-3 py-2"
          >
            <option value="DSA">DSA</option>
            <option value="Git">Git</option>
            <option value="Technical">Technical</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Difficulty</label>

          <select
            {...register("difficulty", { required: true })}
            className="w-full rounded-lg border px-3 py-2"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium">Status</label>

          <select
            {...register("status", { required: true })}
            className="w-full rounded-lg border px-3 py-2"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add Question
        </button>
      </div>
    </form>
  );
};

export default InterviewForm;
