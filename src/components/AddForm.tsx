import { useState } from "react";
import "./AddForm.css";

interface AddFormProps {
  onAdd: (job: {
    jobName: string;
    jobLink: string;
    companyName: string;
    date: string;
    status: string;
  }) => void;
}

export default function AddForm({ onAdd }: AddFormProps) {
  const [form, setForm] = useState({
    jobName: "",
    jobLink: "",
    companyName: "",
    date: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.jobName.trim()) return;
    onAdd(form);
    setForm({
      jobName: "",
      jobLink: "",
      companyName: "",
      date: "",
      status: "",
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
      <input
        name="status"
        placeholder="Status"
        value={form.status}
        onChange={handleChange}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}
