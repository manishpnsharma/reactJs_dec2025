import React from 'react';

const Issue = ({ issue }) => {
  return (
    <li>
      <h3>{issue.title}</h3>
      <p>Status: {issue.status}</p>
      {/* Add a link to the detail view if using React Router */}
      {/* <Link to={`/issues/${issue.id}`}>View Details</Link> */}
    </li>
  );
};

export default Issue;
