import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import InterviewCard from "../components/InterviewCard";
import { useSelector } from "react-redux";

const Tracker = () => {
  const interviews = useSelector((state) => state.tracker.interviews);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-6">
        <FilterBar />

        <div className="mt-6 grid gap-4">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tracker;
