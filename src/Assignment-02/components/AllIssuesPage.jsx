import React, { useState } from 'react';
import IssuesList from './IssuesList';
const AllIssuesPage = () => {
  const [issues] = useState([
    { id: 1, description: 'Bug in login form', severity: " Minor", status: 'Open' },
    { id: 2, description: 'Bug in payment form', severity: "Major", status: 'In Progress' },
    { id: 3, description: 'Bug in looger ', severity: "Critical", status: 'Close' },
    { id: 4, description: 'Bug in connection', severity: "Minor", status: 'Open' }
  ]);
  return (
    <div>
      <h1> Issue List</h1>
      <IssuesList issues={issues} />
    </div>
  );
};
export default AllIssuesPage;
