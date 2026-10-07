import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateInterview } from "../features/tracker/trackerSlice";

const EditInterviewForm = ({ interview, onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      question: interview.question,
      category: interview.category,
      difficulty: interview.difficulty,
      status: interview.status,
    },
  });

  const onSubmit = (data) => {
    dispatch(
      updateInterview({
        id: interview.id,
        ...data,
      }),
    );

    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 rounded-xl bg-white p-5 shadow-sm"
    >
      <div className="grid gap-4">
        {/* Question */}
        <div>
          <input
            {...register("question", {
              required: "Question is required",
            })}
            className="w-full rounded-lg border px-4 py-2 outline-none"
          />

          {errors.question && (
            <p className="mt-1 text-sm text-red-500">
              {errors.question.message}
            </p>
          )}
        </div>

        {/* Category */}
        <select
          {...register("category")}
          className="rounded-lg border px-4 py-2"
        >
          <option value="DSA">DSA</option>
          <option value="Git">Git</option>
          <option value="Technical">Technical</option>
        </select>

        {/* Difficulty */}
        <select
          {...register("difficulty")}
          className="rounded-lg border px-4 py-2"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Status */}
        <select {...register("status")} className="rounded-lg border px-4 py-2">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Update Question
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditInterviewForm;
