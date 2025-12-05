// layouts/MainLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main> {/* This is where your page-specific content will be rendered */}
      <Footer />
    </>
  );
};

export default MainLayout;