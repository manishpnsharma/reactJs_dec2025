import React from 'react';
import Issue from './Issue';

const IssuesList = ({ issues }) => {
  return (
    <table border="1">
      <thead>
      <tr>
        <th>ID 1</th>
        <th>description 2</th>
        <th>severity 3</th>
        <th>status 4</th>

      </tr>
      </thead>
     
        <tbody>
          {issues.map(issue => (
            // The 'key' prop is essential for performance and proper rendering of lists
            <Issue key={issue.id} issue={issue} />
          ))} 
          
        </tbody>
      
    </table>
  );
};

export default IssuesList;
