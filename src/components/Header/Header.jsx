import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="user-settings">Settings</Link>
        </li>
        <li>
          <Link to="generate-reports">Generate Reports</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
