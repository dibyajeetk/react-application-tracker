import { useState } from "react";
import "./AddForm.css";

interface AddFormProps {
  onAdd: (job: {
    jobName: string;
    jobLink: string;
    companyName: string;
    date: string;
    status: string;
    jobDescription?: string;
  }) => void;
}

export default function AddForm({ onAdd }: AddFormProps) {
  // Prefill date with today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    jobName: "",
    jobLink: "",
    companyName: "",
    date: today,
    status: "Applied",
    jobDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.jobName.trim()) return; // job name required
    onAdd(form);
    setForm({
      jobName: "",
      jobLink: "",
      companyName: "",
      date: today,
      status: "Applied",
      jobDescription: "",
    });
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h2>Add New Job</h2>

      <input
        name="jobName"
        placeholder="Job Name"
        value={form.jobName}
        onChange={handleChange}
        required
      />

      <textarea
        name="jobDescription"
        placeholder="Job Description (optional)"
        rows={3}
        value={form.jobDescription}
        onChange={handleChange}
      />

      <input
        name="jobLink"
        placeholder="Job Link"
        value={form.jobLink}
        onChange={handleChange}
      />

      <input
        name="companyName"
        placeholder="Company Name"
        value={form.companyName}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
}
