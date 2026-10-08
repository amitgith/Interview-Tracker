import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import InterviewCard from "../components/InterviewCard";
import InterviewForm from "../components/InterviewForm";
import EditInterviewForm from "../components/EditInterviewForm";
import Dashboard from "../components/Dashboard";

const Tracker = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingInterview, setEditingInterview] = useState(null);

  const interviews = useSelector((state) => state.tracker.interviews);
  useEffect(() => {
    localStorage.setItem("interviews", JSON.stringify(interviews));
  }, [interviews]);

  const machineCoding = useSelector((state) => state.tracker.machineCoding);

  useEffect(() => {
    localStorage.setItem("machineCoding", JSON.stringify(machineCoding));
  }, [machineCoding]);

  const filters = useSelector((state) => state.tracker.filters);

  const filteredInterviews = interviews.filter((item) => {
    const searchMatch = item.question
      ?.toLowerCase()
      .includes(filters.search.toLowerCase());

    const categoryMatch =
      filters.category === "all" || item.category === filters.category;

    const statusMatch =
      filters.status === "all" || item.status === filters.status;

    const difficultyMatch =
      filters.difficulty === "all" || item.difficulty === filters.difficulty;

    return searchMatch && categoryMatch && statusMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAdd={() => setShowForm(true)} />

      <main className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
        {/* Add Question Form */}
        {showForm && (
          <div className="mb-6">
            <InterviewForm onClose={() => setShowForm(false)} />
          </div>
        )}

        {/* Edit Question Form */}
        {editingInterview && (
          <div className="mb-6">
            <EditInterviewForm
              interview={editingInterview}
              onClose={() => setEditingInterview(null)}
            />
          </div>
        )}

        <Dashboard />

        {/* Search + Filters */}
        <div className="mt-5 sm:mt-6">
          <FilterBar />
        </div>

        {/* Questions */}
        <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
          {interviews.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
              <h2 className="text-xl font-semibold">No questions yet</h2>

              <p className="mt-2 text-gray-500">
                Start your interview preparation by adding a question.
              </p>
            </div>
          ) : filteredInterviews.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
              <h2 className="text-xl font-semibold">No questions found</h2>

              <p className="mt-2 text-gray-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            filteredInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                interview={interview}
                onEdit={() => setEditingInterview(interview)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Tracker;
