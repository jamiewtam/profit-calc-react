import React from "react";
import { IconContext } from "react-icons";
import Logo from "../../assets/images/logo.png";
import SideNavigation from "./SidebarNavigation";

const Header = (props) => {
  return (
    <div className="dashboard-main-wrapper">
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <a className="navbar-brand">
            <img className="logo" src={Logo} alt="profit-calc-logo" />
          </a>
          <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
            <SideNavigation />
          </IconContext.Provider>
        </nav>
      </div>
    </div>
  );
};

export default Header;
