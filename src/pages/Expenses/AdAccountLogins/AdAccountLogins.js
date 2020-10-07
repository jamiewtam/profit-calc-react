import React from "react";
import { useRouteMatch, Route } from "react-router-dom";

import PageContainer from "../../../Layouts/Pages/PageContainer";
import SubNavMenu from "../../../components/Navigation/SubNavMenu";
import { FacebookAds, GoogleAds, BingAds } from "./AdAccountLoginComponents";

const routes = [
  { to: "", title: "Facebook Ads" },
  { to: "/Google", title: "Google Ads" },
  { to: "/Bing", title: "Bing Ads Ads" },
];

const AdLogins = () => {
  const { url } = useRouteMatch();
  return (
    <PageContainer pageTitle="Ad Accounts">
      <SubNavMenu routes={routes} url={url} />
      <Route exact path={`${url}`}>
        <FacebookAds />
      </Route>
      <Route path={`${url}/Google`}>
        <GoogleAds />
      </Route>
      <Route path={`${url}/Bing`}>
        <BingAds />
      </Route>
    </PageContainer>
  );
};

export default AdLogins;
