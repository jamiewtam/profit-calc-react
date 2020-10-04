import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = (props) => {
  return (
    <div className="dashboard-main-wrapper">
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <a className="navbar-brand">
            <img className="logo" src={Logo} alt="profit-calc-logo" />
          </a>
        </nav>
      </div>
      <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-divider">Analytics</li>
                <li className="nav-item"></li>
                <NavLink className="nav-link" to="/dashboard">
                  <i className="fa fa-fw fa-database"></i>Dashboard
                </NavLink>
                <a className="nav-link" href="/reports/orders">
                  <i className="fa fa-fw fa-sort"></i>Order Breakdown
                </a>
                <a className="nav-link" href="/reports/lineChart">
                  <i className="fa fa-fw fa-chart-line"></i>Graph Breakdown
                </a>
                <li className="nav-divider">Expenses</li>
                <li className="nav-item"></li>
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="collapse"
                  aria-expanded="false"
                  data-target="#submenu-2"
                  aria-controls="submenu-2"
                >
                  <i className="fa fa-fw fa-cogs"></i>Cost of Goods Sold
                </a>
                <div className="collapse submenu" id="submenu-2">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="/manualCOGS">
                        1) Manual COGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/aliexpressSetup">
                        2) Aliexpress COGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/cjshippingsetup">
                        3) CJ Dropshipping
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/cogsByDate">
                        4) COGS By Date
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item"></li>
                <a className="nav-link" href="/newexpense">
                  <i className="fa fa-fw fa-calendar"></i>Monthly Expenses
                </a>
                <a className="nav-link" href="/adlogins">
                  <i className="fa fa-fw fa-user-circle"></i>Ad Platforms
                </a>
                <a className="nav-link" href="/customCountryExpense">
                  <i className="fa fa-fw fa-boxes"></i>Custom Country Exp.
                </a>
                <li className="nav-divider">Settings</li>
                <a className="nav-link" href="/settings">
                  <i className="fa fa-fw fa-credit-card"></i>Gateway Settings
                </a>
                <a className="nav-link" href="/generalSettings">
                  <i className="fa fa-fw fa-wrench"></i>General Settings
                </a>
                <a className="nav-link" href="/vatsettings">
                  <i className="fa fa-fw fa-book"></i>VAT Settings
                </a>
                <a className="nav-link" href="/dashboardSettings">
                  <i className="fa fa-fw fa-arrows-alt"></i>Dashboard Custom.
                </a>
                <li className="nav-divider">Help Center</li>
                <a
                  className="nav-link"
                  href="https://profit-calc.helpscoutdocs.com/"
                  target="_blank"
                >
                  <i className="fa fa-fw fa-bars"></i>FAQ
                </a>
                <a
                  className="nav-link"
                  href="https://profit-calc.helpscoutdocs.com/category/4-getting-started"
                  target="_blank"
                >
                  <i className="fa fa-fw fa-play"></i>Getting Started
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
