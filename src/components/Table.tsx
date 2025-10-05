import { useState } from "react";
import "./Table.css";

interface Job {
  jobName: string;
  jobLink: string;
  companyName: string;
  date: string;
  status: string;
  jobDescription?: string;
}

interface TableProps {
  jobs: Job[];
  onDelete: (index: number) => void;
}

export default function Table({ jobs, onDelete }: TableProps) {
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleDeleteClick = (index: number) => {
    setDeleteIndex(index);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      setDeleteIndex(null);
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
    setShowModal(false);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Application Date</th>
            <th>Job Name</th>
            <th>Job Description</th>
            <th>Job Link</th>
            <th>Company Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No jobs added yet.
              </td>
            </tr>
          ) : (
            jobs.map((job, i) => (
              <tr key={i}>
                <td>{job.date}</td>
                <td>{job.jobName}</td>
                <td className="description-cell">{job.jobDescription}</td>
                <td>
                  <a href={job.jobLink} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </td>
                <td>{job.companyName}</td>
                <td>{job.status}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteClick(i)}
                  >
                    <i className="bi bi-trash3 btn-icon"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this job entry?</p>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={confirmDelete}>
                Yes, Delete
              </button>
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
