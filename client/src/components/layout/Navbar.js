import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>People</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <i className='fas fa-users'></i>
          <span className='hide-sm'> People</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-address-card'></i>
          <span className='hide-sm'> Dashboard</span>
        </Link>
      </li>
      <li>
        <div class='dropdown'>
          <button class='clickable dropbtn'>
            <i class='fa fa-cog'></i>
            <span className='hide-sm'> Settings</span>
          </button>
          <div class='dropdown-content'>
            <Link className='dropdown-option' to='#'>
              Account Settings
            </Link>
            <Link className='dropdown-option' to='#'>
              Security Settings
            </Link>
            <Link to='#'>Customization</Link>
          </div>
        </div>
      </li>
      <li className='clickable'>
        <p onClick={logoutHandler}>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'> Logout</span>
        </p>
      </li>
    </ul>
  );
  return (
    <nav className='navbar dark'>
      <h1>
        <Link to='/'>
          <i className='fa fa-comment'></i> iConnect
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

export default Navbar;
