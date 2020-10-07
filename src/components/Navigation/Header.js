import React from "react";
import { IconContext } from "react-icons";
import Logo from "../../assets/images/logo.png";
import SideNavigation from "./SidebarNavigation";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <a className="navbar-brand">
            <img className="logo" src={Logo} alt="profit-calc-logo" />
          </a>
        </nav>
      </div>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <SideNavigation />
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Header;
