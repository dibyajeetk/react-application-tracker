import { useState, useEffect } from "react";
import Table from "./components/Table";
import AddForm from "./components/AddForm";
import "./App.css";

export default function App() {
  const [jobs, setJobs] = useState<
    {
      jobName: string;
      jobLink: string;
      companyName: string;
      date: string;
      status: string;
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
  }) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="layout">
      <div className="table-section">
        <Table jobs={jobs} />
      </div>
      <div className="form-section">
        <AddForm onAdd={addJob} />
      </div>
    </div>
  );
}
