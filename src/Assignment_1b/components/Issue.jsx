import React from 'react';

const Issue = ({ issue }) => {
  const { id, description, severity, status } = issue;
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>{severity}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Issue;
