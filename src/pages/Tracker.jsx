import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import InterviewCard from "../components/InterviewCard";
import InterviewForm from "../components/InterviewForm";
import EditInterviewForm from "../components/EditInterviewForm";

const Tracker = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingInterview, setEditingInterview] = useState(null);

  const interviews = useSelector(
    (state) => state.tracker.interviews
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAdd={() => setShowForm(true)} />

      <main className="mx-auto max-w-6xl px-6 py-6">

        {showForm && (
          <InterviewForm
            onClose={() => setShowForm(false)}
          />
        )}

        {editingInterview && (
          <EditInterviewForm
            interview={editingInterview}
            onClose={() => setEditingInterview(null)}
          />
        )}

        <FilterBar />

        <div className="mt-6 grid gap-4">
          {interviews.map((interview) => (
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