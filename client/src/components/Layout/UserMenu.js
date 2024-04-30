import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group dashboard-menu">
        <h4>Admin Panel</h4>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/Orders"
          className="list-group-item list-group-item-action"
        >
          My Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
