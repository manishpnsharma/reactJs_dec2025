import React from 'react';
import Issue from './Issue';

const IssuesList = ({ issues }) => {
  return (
    <ul>
      {/* Use map to iterate and render the Issue component for each issue */}
      {issues.map(issue => (
        // The 'key' prop is essential for performance and proper rendering of lists
        <Issue key={issue.id} issue={issue} />
      ))}
    </ul>
  );
};

export default IssuesList;
