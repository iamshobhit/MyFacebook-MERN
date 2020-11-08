import React from 'react';
import PrivateNavBar from './components/PrivateNavBar'
import Footer from './components/Footer';

const AppShell = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="sm:w-64 px-4 sm:px-8 pt-6 bg-white">
          
        </div>
        <div className="flex flex-col w-full border-l border-gray-200">
            <PrivateNavBar />
          <div className="px-4 sm:px-8 py-2 bg-gray-100">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppShell;
