import React from 'react';
import img from '../../assets/logout.png';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Good morning, Maharram</span>
        <div className="d-flex">
          <img src={img} alt="profile" className="rounded-circle" width="40" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
