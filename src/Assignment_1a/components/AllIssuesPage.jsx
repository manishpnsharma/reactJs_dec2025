import React, { useState, useEffect } from 'react';
import IssuesList from './IssuesList';

const AllIssuesPage = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, you would fetch data from an API here
  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const fetchedIssues = [
        { id: 1, title: 'Bug in login form', status: 'Open' },
        { id: 2, title: 'Feature request: dark mode', status: 'Closed' },
        // ... more issues
      ];
      setIssues(fetchedIssues);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading issues...</div>;
  }

  return (
    <div>
      <h1>All Issues</h1>
      {/* Pass the issues data to the IssuesList component */}
      <IssuesList issues={issues} />
    </div>
  );
};

export default AllIssuesPage;
