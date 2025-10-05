import { useState, useEffect } from "react";
import Table from "./components/Table";
import AddForm from "./components/AddForm";
import "bootstrap-icons/font/bootstrap-icons.css"; // ✅ import bootstrap icons
import "./App.css";

export default function App() {
  const [jobs, setJobs] = useState<
    {
      jobName: string;
      jobLink: string;
      companyName: string;
      date: string;
      status: string;
      jobDescription?: string;
    }[]
  >([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("jobs");
    if (stored) setJobs(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job: {
    jobName: string;
    jobLink: string;
    companyName: string;
    date: string;
    status: string;
    jobDescription?: string;
  }) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (index: number) => {
    setJobs(jobs.filter((_, i) => i !== index));
  };

  return (
    <div className="layout">
      <div className="table-section">
        <Table jobs={jobs} onDelete={deleteJob} /> {/* ✅ fixed */}
      </div>
      <div className="form-section">
        <AddForm onAdd={addJob} />
      </div>
    </div>
  );
}
