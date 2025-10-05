import "./Table.css";

interface Job {
  jobName: string;
  jobLink: string;
  companyName: string;
  date: string;
  status: string;
}

export default function Table({ jobs }: { jobs: Job[] }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Job Name</th>
            <th>Job Link</th>
            <th>Company Name</th>
            <th>Application Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No jobs added yet.
              </td>
            </tr>
          ) : (
            jobs.map((job, i) => (
              <tr key={i}>
                <td>{job.jobName}</td>
                <td>
                  <a href={job.jobLink} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </td>
                <td>{job.companyName}</td>
                <td>{job.date}</td>
                <td>{job.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
