import React from "react";

import { NavLink, Route, useRouteMatch } from "react-router-dom";

import PageContainer from "../../../Layouts/Pages/PageContainer";

import {
  GeneralSettingsGeneral,
  GeneralSettingsAliexpress,
  GeneralSettingsCJDropshipping,
  GeneralSettingsOther,
} from "./generalSettingCards";

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

const routes = [
  { to: "", title: "General" },
  { to: "/aliexpress", title: "Aliexpress" },
  { to: "/CJDropshipping", title: "CJ Dropshipping" },
  { to: "/other", title: "Other" },
];

const NavMenu = ({ routes, url }) => {
  return routes.map((route) => {
    return (
      <li style={NavLiMenuStyle}>
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
  });
};

const GeneralSettings = (props) => {
  const { url } = useRouteMatch();

  return (
    <PageContainer pageTitle="General Settings">
      <div id="update-general-settings"></div>
      <ul style={NavUlMenuStyle}>
        <NavMenu routes={routes} url={url} />
      </ul>
      <Route exact path="/generalSettings">
        <GeneralSettingsGeneral />
      </Route>
      <Route path="/generalSettings/aliexpress">
        <GeneralSettingsAliexpress />
      </Route>
      <Route path="/generalSettings/CJDropshipping">
        <GeneralSettingsCJDropshipping />
      </Route>
      <Route path="/generalSettings/other">
        <GeneralSettingsOther />
      </Route>
    </PageContainer>
  );
};

export default GeneralSettings;
