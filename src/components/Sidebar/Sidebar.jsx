import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import 'font-awesome/css/font-awesome.min.css';
import img from '../../assets/image_girl.png'


const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar bg-dark d-flex flex-column">
      <div className="user-profile text-center py-2">
        <img
          src={img}
          alt="Profile"
          className="profile-image"
        />
        <div className='user-info'>
        <h5 className="text-white mt-2">Maharram</h5>
        <p className="text-white">+998 (99) 436-46-15</p>
        </div>
      </div>
      <ul className="nav flex-column">
        <li className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          <Link to="/dashboard" className="nav-link">
            <i className="fa fa-home"></i> Dashboard
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/orders' ? 'active' : ''}`}>
          <Link to="/orders" className="nav-link">
            <i className="fa fa-shopping-cart"></i> Orders
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/rides' ? 'active' : ''}`}>
          <Link to="/rides" className="nav-link">
            <i className="fa fa-car"></i> Rides
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/clients' ? 'active' : ''}`}>
          <Link to="/clients" className="nav-link">
            <i className="fa fa-users"></i> Clients
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/drivers' ? 'active' : ''}`}>
          <Link to="/drivers" className="nav-link">
            <i className="fa fa-id-card"></i> Drivers
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/shift' ? 'active' : ''}`}>
          <Link to="/shift" className="nav-link">
            <i className="fa fa-clock"></i> Shift
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/live-map' ? 'active' : ''}`}>
          <Link to="/live-map" className="nav-link">
            <i className="fa fa-map-marker"></i> Live Map
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/car-classes' ? 'active' : ''}`}>
          <Link to="/car-classes" className="nav-link">
            <i className="fa fa-car"></i> Car Classes
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/branches' ? 'active' : ''}`}>
          <Link to="/branches" className="nav-link">
            <i className="fa fa-building"></i> Branches
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/moderators' ? 'active' : ''}`}>
          <Link to="/moderators" className="nav-link">
            <i className="fa fa-user-shield"></i> Moderators
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
          <Link to="/settings" className="nav-link">
            <i className="fa fa-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
