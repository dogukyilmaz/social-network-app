import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'> <i class="fas fa-code"></i> Social Network </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profiles'> Developers </Link>
        </li>
        <li>
          <Link to='/register'> Sign Up </Link>
        </li>
        <li>
          <Link to='/login'> Login </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;



