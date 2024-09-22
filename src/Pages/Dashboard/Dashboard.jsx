import React from 'react';
import StatisticsChart from '../../Pages/Dashboard/StatisticsChart/StatisticsChart';
import './Dashboard.scss'; 
import DriverList from './DriverList/DriverList';
import UserDetails from './UserDetails/UserDetails';

const Dashboard = () => {
  const drivers = [
    {
      id: 1,
      name: "Maharram Hasani",
      phone: "+998 (99) 436-15-15",
      orders: 5,
      income: "$98"
    },
    {
      id: 2,
      name: "Gina Gizza",
      phone: "+998 (97) 158-10-23",
      orders: 5,
      income: "$5"
    },
    {
      id: 3,
      name: "Brian Reed",
      phone: "+998 (95) 489-46-20",
      orders: 5,
      income: "$23"
    },
    {
      id: 4,
      name: "Jon Reed",
      phone: "+998 (95) 890-90-98",
      orders: 5,
      income: "$98"
    },
    {
      id: 5,
      name: "Gina Reed",
      phone: "+998 (95) 789-89-98",
      orders: 5,
      income: "$98"
    },
    {
      id: 6,
      name: "Jahongir Stewart",
      phone: "+998 (90) 894-64-65",
      orders: 5,
      income: "$98"
    }
  ];
  
  return (
    <div className="container-fluid p-4">
      <div className='left-side-data'>
        <h3>Knowledge Base</h3>
        <div className="row mb-4 custom-row">
          <div className="col-sm-4">
            <div className="card custom-card bg-primary text-white">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="card-text">
                  <i className="fa fa-folder"></i> Total Orders
                </span>
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card bg-danger text-white">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="card-text">
                  <i className="fa fa-dollar"></i> Total Earnings
                </span>
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card bg-warning text-white">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="card-text">
                  <i className="fa fa-line-chart"></i> Profits
                </span>
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className='Statistic-container'>
          <StatisticsChart />
        </div>
      </div>
      <div className='right-side-data'>
        <DriverList drivers={drivers} />
      </div>
      <div className='user-details'>
        <UserDetails />
      </div>
    </div>
  );
};

export default Dashboard;
