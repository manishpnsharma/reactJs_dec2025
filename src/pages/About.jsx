import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>Learn more about our company.</p>
      <Link to="/">Go to Home</Link> {/* Link back to the home page */}
    </div>
  );
};

export default About;
