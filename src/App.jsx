import React from "react";
import { BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/orders/Orders";
import Rides from "./Pages/Rides/Rides";
import Clients from "./Pages/Clients/Clients";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import OtpVerification from "./Authentication/Otp/OtpVerification";
import Moderators from "./Pages/Moderators/Moderators";
import CarClasses from "./Pages/CarClasses/CarClasses";
import LiveMap from "./Pages/LiveMap/LiveMap";
import Drivers from "./Pages/Drivers/Drivers";
import Shift from "./Pages/Shift/Shift"
import Settings from "./Pages/Settings/Settings"
import "./App.scss";

const App = () => {
  const isAuthPage = window.location.pathname === "/login" || window.location.pathname === "/" || window.location.pathname === "/otp";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route
          path="/*"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className={`content-wrapper ${!isAuthPage ? "dashboard-container" : "auth-page"}`}>
                <Header />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/rides" element={<Rides />} />
                  <Route path="/Moderators" element={<Moderators/>}/>
                  <Route path="/live-map" element={<LiveMap/>}/>
                  <Route path="/shift" element={<Shift/>}/>
                  <Route path="/car-classes" element={<CarClasses/>}/>
                  <Route path="/drivers" element={<Drivers/>}/>
                  <Route path="/settings" element={<Settings/>}/>
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

