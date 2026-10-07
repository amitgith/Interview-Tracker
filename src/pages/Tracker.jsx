import { useState } from "react";
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

      <main className="mx-auto max-w-6xl px-6 py-6">
        {/* Add Question Form */}
        {showForm && <InterviewForm onClose={() => setShowForm(false)} />}

        {/* Edit Question Form */}
        {editingInterview && (
          <EditInterviewForm
            interview={editingInterview}
            onClose={() => setEditingInterview(null)}
          />
        )}

        {/* Dashboard */}
        <Dashboard />

        {/* Search + Filters */}
        <div className="mt-6">
          <FilterBar />
        </div>

        {/* Questions */}
        <div className="mt-6 grid gap-4">
          {filteredInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              interview={interview}
              onEdit={() => setEditingInterview(interview)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tracker;
