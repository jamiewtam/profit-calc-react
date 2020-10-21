import React from "react";

import { NavLink } from "react-router-dom";

const NavUlMenuStyle = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  textAlign: "center",
};

const NavLiMenuStyle = {
  display: "inline-block",
  color: "white",
  textAlign: "center",
  fontSize: "18px",
  padding: "16px",
  textDecoration: "none",
};

const SubNavMenu = ({ routes, url }) => {
  return (
    <ul style={NavUlMenuStyle}>
      {routes.map((route) => {
        return (
          <li style={NavLiMenuStyle} key={route.to}>
            <NavLink
              exact
              activeStyle={{ textDecoration: "underline" }}
              key={route.to}
              to={`${url}${route.to}`}
            >
              {route.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SubNavMenu;
