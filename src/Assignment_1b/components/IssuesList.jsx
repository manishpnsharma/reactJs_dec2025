import React from 'react';
import Issue from './Issue';
const IssuesList = ({ issues }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Severity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </tbody>
    </table>
  );
};

export default IssuesList;
