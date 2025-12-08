import React from 'react';

const Issue = ({ issue }) => {
  const { id, description, severity, status } = issue;
  return (
    <tr>
      <th>ID</th>
      <th>description</th>
      <th>severity</th>
      <th>status</th>
    </tr>
  );
};

export default Issue;
