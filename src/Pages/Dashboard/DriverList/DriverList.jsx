import React from 'react';
import './DriverList.scss';
import img from '../../../assets/driver-1.png'

const DriverList = ({ drivers }) => (
  <div className="top-drivers">
    <h2>Top Drivers</h2>
    {drivers.map(driver => (
      <div className="driver" key={driver.id}>
        <img src={img} alt={driver.name} />
        <div className="info">
          <p className="name">{driver.name}</p>
          <p className="phone">{driver.phone}</p>
        </div>
        <div className="stats">
          <p>Orders: {driver.orders}</p>
          <p>Income: {driver.income}</p>
        </div>
      </div>
    ))}
  </div>
);

export default DriverList;
