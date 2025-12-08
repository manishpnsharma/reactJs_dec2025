import React, { useState } from 'react';
import IssuesList from './IssuesList';

const AllIssuesPage = () => {
  const [issues] = useState([

    { id: 1, description: 'Bug in login form', severity: " Hi", status: 'Open' },
    { id: 2, description: 'Bug in 2', severity: " H2i", status: 'Open' },
    { id: 3, description: 'Bug in login form', severity: " Hi", status: 'Open' },
    { id: 4, description: 'Bug in 2', severity: " H2i", status: 'Open' }
    // ... more issues
  ]);

  return (
    <div>
      <h1>All Issues</h1>
      {/* Pass the issues data to the IssuesList component */}
      <IssuesList issues={issues} />
    </div>
  );
};

export default AllIssuesPage;
