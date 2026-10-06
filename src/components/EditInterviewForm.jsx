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
      company: interview.company,
      role: interview.role,
      status: interview.status,
      date: interview.date,
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
        <div>
          <input
            {...register("company", {
              required: "Company name is required",
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.company && (
            <p className="text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("role", {
              required: "Job role is required",
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>

        <select {...register("status")} className="rounded-lg border px-4 py-2">
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date"
          {...register("date", {
            required: "Date is required",
          })}
          className="rounded-lg border px-4 py-2"
        />

        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Update Interview
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
