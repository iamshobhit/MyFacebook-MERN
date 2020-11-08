import React, {useContext,useRef} from 'react';
import { AuthContext } from '../context/AuthContext';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Logout = () => {
  const node = useRef();
  const auth = useContext(AuthContext);
  const { authState } = auth;

  return (
    <div ref={node}>
      <button ref={node} type="button" onClick={auth.logout} className="btn btn-outline-light logoStyle d-flex">
        {authState.userInfo.firstName}
        <span className="badge badge-light bg align-self-center ml-2"><FontAwesomeIcon icon={faSignOutAlt} /></span>
      </button>
    </div>
  );
};

export default Logout;
