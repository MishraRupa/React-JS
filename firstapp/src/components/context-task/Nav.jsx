import React from 'react';
import './Navbar.css'; // Optional: for styling
import authContext from './auth-context';
import { useContext } from 'react';

const Navbar = () => {

  const {logout} = useContext(authContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Context-API</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
      <button className="logout-button" onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
