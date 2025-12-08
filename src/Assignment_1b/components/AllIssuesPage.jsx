import React, { useState } from 'react';
import IssuesList from './IssuesList';
const AllIssuesPage = () => {
  const [issues] = useState([
    { id: 1, description: 'Bug in login form', severity: " P1", status: 'Open' },
    { id: 2, description: 'Bug in payment form', severity: " P1", status: 'Open' },
    { id: 3, description: 'Bug in looger ', severity: " P2", status: 'Close' },
    { id: 4, description: 'Bug in connection', severity: " P3", status: 'Open' }
  ]);
  return (
    <div>
      <h1>All Issues</h1>
      <IssuesList issues={issues} />
    </div>
  );
};
export default AllIssuesPage;
