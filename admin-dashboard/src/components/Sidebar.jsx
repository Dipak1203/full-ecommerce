import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="avatar__section">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHJpbmMx0KwZA/profile-displayphoto-shrink_200_200/0/1682740337652?e=1690416000&v=beta&t=eCK-6TtioU9ix4wBZKZLS54gA8MUzSplPd4WL8oT6C8"
          className="avatar"
        />
        <h4 className="profile_heading">DIPAK</h4>
      </div>
      <ul className="sideBar__content">
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/finances">Finances</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/invoices">Invoices</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/message">Message</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/helpCenter">Help Center</NavLink>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <NavLink to="/setting">Setting</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
