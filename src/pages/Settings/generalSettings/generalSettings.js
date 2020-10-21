import React from "react";

import { Route, useRouteMatch } from "react-router-dom";

import SubNavMenu from "../../../components/Navigation/SubNavMenu";
import PageContainer from "../../../Layouts/Pages/PageContainer";

import {
  GeneralSettingsGeneral,
  GeneralSettingsAliexpress,
  GeneralSettingsCJDropshipping,
  GeneralSettingsOther,
} from "./generalComponents";

const routes = [
  { to: "", title: "General" },
  { to: "/aliexpress", title: "Aliexpress" },
  { to: "/CJDropshipping", title: "CJ Dropshipping" },
  { to: "/other", title: "Other" },
];

const GeneralSettings = () => {
  const { url } = useRouteMatch();

  return (
    <PageContainer pageTitle="General Settings">
      <SubNavMenu routes={routes} url={url} />
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
