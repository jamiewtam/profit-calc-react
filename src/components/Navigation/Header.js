import React from "react";

import Logo from "../../assets/images/logo.png";
import SideNavigation from "./SidebarNavigation";
import { userContext } from "../../util/Context/userContext";

const Header = () => {
  const user = React.useContext(userContext);

  let storeName;
  if (user) {
    storeName = user.storeName.split(".")[0].split("-").join(" ");
  }

  return (
    <React.Fragment>
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <div className="navbar-brand">
            <img className="logo" src={Logo} alt="profit-calc-logo" />
          </div>
          <div className="store-name-element">
            <h3 className="mb-2">{storeName}</h3>
          </div>
        </nav>
      </div>
      <SideNavigation />
    </React.Fragment>
  );
};

export default Header;
