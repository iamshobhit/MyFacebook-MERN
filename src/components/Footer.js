import React, { useState } from 'react';
import AuthDebugger from './AuthDebugger';
import {Button} from 'react-bootstrap'

const Footer = () => {
  const [showAuthDebugger, setShowAuthDebugger] = useState(
    false
  );
  return (
    <footer className="p-6">
      <div className="ml-2">
        <Button
          className="btn btn-outline-light logoStyle"
          onClick={() =>
            setShowAuthDebugger(!showAuthDebugger)
          }
        >
          Click Here to See Your Profile
        </Button>
      </div>
      <div className="mt-4">
        {showAuthDebugger && <AuthDebugger />}
      </div>
    </footer>
  );
};

export default Footer;
