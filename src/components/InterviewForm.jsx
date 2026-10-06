import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addInterview } from "../features/tracker/trackerSlice";

const InterviewForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
      className="mt-4 rounded-xl bg-white p-5 shadow-sm"
    >
      <div className="grid gap-4">
        {/* Company */}
        <div>
          <input
            {...register("company", {
              required: "Company name is required",
            })}
            placeholder="Company Name"
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.company && (
            <p className="mt-1 text-sm text-red-500">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <input
            {...register("role", {
              required: "Job role is required",
            })}
            placeholder="Job Role"
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.role && (
            <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>

        {/* Status */}
        <select
          {...register("status")}
          className="rounded-lg border px-4 py-2"
          defaultValue="Applied"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* Date */}
        <div>
          <input
            type="date"
            {...register("date", {
              required: "Interview date is required",
            })}
            className="rounded-lg border px-4 py-2"
          />

          {errors.date && (
            <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Add Interview
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

export default InterviewForm;
