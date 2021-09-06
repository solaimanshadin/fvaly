import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { useLocation } from 'react-router';

const DefaultLayout: React.FC = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes('/dashboard') && <Header />}
      {children}
      {!location.pathname.includes('/dashboard') && <Footer />}
    </>
  );
};

export default DefaultLayout;
