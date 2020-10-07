import React from "react";
import { NavLink } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import {
  FaSort,
  FaDatabase,
  FaChartLine,
  FaCalendar,
  FaBoxes,
  FaCreditCard,
  FaWrench,
  FaArrowsAlt,
  FaPlay,
  FaBars,
  FaUserCircle,
  FaBook,
  FaCogs,
} from "react-icons/fa";

const NavItem = ({ title, CustomIcon, link }) => {
  return (
    <NavLink className="nav-link" to={link}>
      <CustomIcon size="16px" />
      &nbsp;
      {title}
    </NavLink>
  );
};

const NavDivider = ({ title }) => {
  return <li className="nav-divider">{title}</li>;
};

const SideNavigation = () => {
  return (
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
              <NavDivider title="Analytics" />
              <NavItem
                title="Dashboard"
                link="/dashboard"
                CustomIcon={FaDatabase}
              />
              <NavItem
                title="Order Breakdown"
                link="/reports/orders"
                CustomIcon={FaSort}
              />
              <NavItem
                title="Graph Breakdown"
                link="/reports/lineCart"
                CustomIcon={FaChartLine}
              />

              <NavDivider title="Expenses" />

              <Accordion>
                <Accordion.Toggle
                  className="nav-link"
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  <FaCogs /> &nbsp;Cost of Goods Sold
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="/manualCOGS">
                        1) Manual COGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/aliexpressCOGS">
                        2) Aliexpress COGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/cjshippingCOGS">
                        3) CJ Dropshipping
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/cogsByDate">
                        4) COGS By Date
                      </a>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion>

              <NavItem
                title="Monthly Expenses"
                link="/monthlyExpenses"
                CustomIcon={FaCalendar}
              />
              <NavItem
                title="Ad Accounts"
                link="/adAccountLogins"
                CustomIcon={FaUserCircle}
              />
              <NavItem
                title="Custom Country Exp."
                link="/customCountryExpense"
                CustomIcon={FaBoxes}
              />
              <NavDivider title="Settings" />
              <NavItem
                title="Gateway Settings"
                link="/settings"
                CustomIcon={FaCreditCard}
              />
              <NavItem
                title="General Settings"
                link="/generalSettings"
                CustomIcon={FaWrench}
              />
              <NavItem
                title="VAT Settings"
                link="/vatSettings"
                CustomIcon={FaBook}
              />
              <NavItem
                title="Dashboard Custom."
                link="/dashboardSettings"
                CustomIcon={FaArrowsAlt}
              />
              <NavDivider title="Help Center" />
              <a
                className="nav-link"
                href="https://profit-calc.helpscoutdocs.com/"
                target="_blank"
              >
                <FaBars />
                &nbsp; FAQ
              </a>
              <a
                className="nav-link"
                href="https://profit-calc.helpscoutdocs.com/category/4-getting-started"
                target="_blank"
              >
                <FaPlay />
                &nbsp; Getting Started
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;
